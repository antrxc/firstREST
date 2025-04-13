
import { register } from '../controllers/authentication';
import express from 'express';

export default (router: express.Router) => {
    router.post('/auth/register', (req, res, next) => {
        register(req, res).catch(next);
    });
}