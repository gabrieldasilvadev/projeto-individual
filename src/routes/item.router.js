const express = require('express');
const itemController = require('../controllers/item.controller');
const itemRouter = express.Router();

itemRouter.get('/api/items', itemController.getAllItems);
itemRouter.get('/api/items/:id', itemController.getItemById);
itemRouter.post('/api/items', itemController.createItem);
itemRouter.put('/api/items/:id', itemController.updateItem);
itemRouter.delete('/api/items/:id', itemController.deleteItem);

module.exports = itemRouter;
