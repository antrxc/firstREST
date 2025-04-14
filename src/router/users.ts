import {getAllUsers}  from 'controllers/user'
import express from 'express'

export default (router: express.Router) => {
  router.get('/users', getAllUsers);
  return router;
}