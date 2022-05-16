const express = require('express');
const UserController = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.get('/users', UserController.getAllUsers);
usersRouter.get('/users/:id', UserController.getUserById);
usersRouter.post('/users', UserController.createUser);
usersRouter.put('/users/:id', UserController.updateUser);
usersRouter.delete('/users/:id', UserController.deleteUser);

module.exports = usersRouter;
