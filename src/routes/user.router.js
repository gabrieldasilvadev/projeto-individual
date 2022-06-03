const express = require('express');
const UserController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/api/users', UserController.getAllUsers);
userRouter.get('/api/users/:id', UserController.getUserById);
// userRouter.post('/users/auth', UserController.createUser);
userRouter.put('/api/users/:id', UserController.updateUser);
userRouter.delete('/api/users/:id', UserController.deleteUser);

module.exports = userRouter;
