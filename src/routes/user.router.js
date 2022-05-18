const express = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/users', UserController.getAllUsers);
userRouter.get('/users/:id', UserController.getUserById);
userRouter.post('/users', UserController.createUser);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);

module.exports = userRouter;
