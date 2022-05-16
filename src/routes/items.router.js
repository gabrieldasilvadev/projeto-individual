const express = require('express');
const itemController = require('../controllers/items.controller');
const itemsRouter = express.Router();

itemsRouter.get('/items', itemController.getAllItems);
itemsRouter.get('/items/:id', itemController.getItemById);
itemsRouter.post('/items', itemController.createItem);
itemsRouter.put('/items/:id', itemController.updateItem);
itemsRouter.delete('/items/:id', itemController.deleteItem);

module.exports = itemsRouter;
