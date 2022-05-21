const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/auth.controller');

authRouter.post('/login', AuthController.loginPost);
authRouter.post('/register', AuthController.registerPost);
authRouter.get('/list', AuthController.list);
authRouter.get('/logout', AuthController.logout);

module.exports = authRouter;
