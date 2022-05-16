const userModel = require('../models/users.model');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await userModel.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await userModel.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await userModel.create(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    try {
      const user = await userModel.findByPk(req.params.id);
      await user.update(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    try {
      const seachUser = await userModel.findByPk(req.params.id);
      await seachUser.destroy(req.params);
      return res
        .status(200)
        .json({ mensagem: `id ${req.params.id} foi deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
