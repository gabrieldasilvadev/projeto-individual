const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/auth.controller');

authRouter.get('/list', AuthController.list);
authRouter.post('/login', AuthController.loginPost);
// authRouter.get('/login', AuthController.login);
authRouter.post('/register', AuthController.registerPost);
authRouter.get('/logout', AuthController.logout);

module.exports = authRouter;
