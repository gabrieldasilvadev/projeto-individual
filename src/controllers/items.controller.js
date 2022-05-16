const itemModal = require('../models/items.model');

class itemController {
  static async getAllItems(req, res) {
    try {
      const items = await itemModal.findAll();
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getItemById(req, res) {
    try {
      const item = await itemModal.findByPk(req.param.id);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createItem(req, res) {
    try {
      const newItem = await itemModal.create(req.body);
      return res.status(200).json(newItem);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateItem(req, res) {
    try {
      const item = await itemModal.findByPk(req.params.id);
      await item.update(req.body);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteItem(req, res) {
    try {
      const searchItem = await itemModal.findByPk(req.params.id);
      await searchItem.destroy(req.params);
      return res.status(200).json({mensagem: `O item de id ${req.params.id} foi deletado`})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = itemController;
