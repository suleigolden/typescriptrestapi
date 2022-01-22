import {Request, Response} from 'express';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body);
    //Valiudate the user's password
    if(!user){
        return res.status(401).send("Invalid email or password");
    }
    //create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    //create a access token
    const accessToken =  signJwt(
        {...user, session: session._id },
        {expiresIn: config.get("accessTokenTtl")} //15 minutes
    );

    //create a refresh token
    const refreshToken =  signJwt(
        {...user, session: session._id },
        {expiresIn: config.get("refreshTokenTtl")} //15 minutes
    );

    //return access & refresh tokens

    return res.send({accessToken, refreshToken})
}