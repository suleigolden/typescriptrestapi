import express from "express";
import config from "config"; 
import connect from "./utils/connects";
import logger from "./utils/logger"; 

const port = config.get<number>('port');
const app = express();
 app.listen(port, () =>{
    logger.info(`App is running at in ${port}`);
    connect();
});