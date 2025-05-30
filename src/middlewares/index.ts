import { getUserBySessionToken } from '../DB/Users';
import express from 'express';
import {merge} from 'lodash' ;



const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['ANTRIC-AUTH'];

        if(!sessionToken){
            return res.sendStatus(403);
        }
        
        const existingUser = await getUserBySessionToken;
        if(!existingUser){
            return res.sendStatus(403);
        }

        merge(req, {identity: existingUser});
        return next;
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

