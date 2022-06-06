const express = require('express');
const UserController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/api/users', UserController.getAllUsers);
userRouter.get('/api/users/:id', UserController.getUserById);
userRouter.put('/api/users/:id', UserController.updateUser);
userRouter.delete('/api/users/:id', UserController.deleteUser);
userRouter.post('/upload-image', UserController.uploadImage);
userRouter.get('/getImage', UserController.getImage);

module.exports = userRouter;
