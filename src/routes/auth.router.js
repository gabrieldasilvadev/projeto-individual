const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/auth.controller');

authRouter.post('/api/login', AuthController.loginPost);
authRouter.post('/api/register', AuthController.registerPost);
authRouter.get('/api/list', AuthController.list);
authRouter.get('/api/logout', AuthController.logout);

module.exports = authRouter;
