import {Request, Response} from 'express';
import { omit } from 'lodash';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(req: Request, res: Response){

    try {
        const user = await createUser(req.body);
        // return res.send(omit(user.toJSON(), "password"));
        return res.send(user);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}