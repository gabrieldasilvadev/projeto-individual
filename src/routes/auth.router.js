const express = require('express');
const authRouter = express.Router();
const AuthController = require('../controllers/auth.controller');

authRouter.get('/auth', AuthController.login);
authRouter.get('/auth/register', AuthController.register);
authRouter.post('/auth/register', AuthController.registerPost);

module.exports = authRouter;
