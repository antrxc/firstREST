import { getAllUsers } from '../controllers/user'
import express from 'express'

export default (router: express.Router) => {
  router.get('/users', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    getAllUsers(req, res).catch(next);
  });
  return router;
}