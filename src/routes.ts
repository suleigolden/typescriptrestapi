import {Express, Request, Response} from 'express';
import { createUserSessionHandler } from './controller/session.controller';
import { createUserHandler } from './controller/user.controller';
import validateResource from "./middleware/validateResource";
import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from "./schema/user.schema"; 

function routes(app: Express) {
    app.get('/routecheck', (req: Request, res: Response) =>  res.sendStatus(200));

    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

    app.post("/api/sessions", validateResource(createSessionSchema), createUserSessionHandler);
}

export default routes;