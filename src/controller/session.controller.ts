import {Request, Response} from 'express';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';

export async function createUserSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body);
    //Valiudate the user's password
    if(!user){
        return res.status(401).send("Invalid email or password");
    }
    //create a session
    const sessionm = createSession(user._id, req.get("user-agent") || "");
}