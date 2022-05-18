const express = require('express');
const itemController = require('../controllers/item.controller');
const itemRouter = express.Router();

itemRouter.get('/items', itemController.getAllItems);
itemRouter.get('/items/:id', itemController.getItemById);
itemRouter.post('/items', itemController.createItem);
itemRouter.put('/items/:id', itemController.updateItem);
itemRouter.delete('/items/:id', itemController.deleteItem);

module.exports = itemRouter;
