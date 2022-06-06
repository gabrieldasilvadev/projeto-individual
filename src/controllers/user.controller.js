const userModel = require('../models/user.model');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await userModel.findAll({
        attributes: ['id', 'nome', 'email', 'universo', 'time', 'nivel'],
      });
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
      const searchUser = await userModel.findByPk(req.params.id);
      await searchUser.destroy(req.params);
      return res
        .status(200)
        .json({ mensagem: `O usuario de id ${req.params.id} foi deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async uploadImage(req, res) {
    try {
      const { email, image } = req.body;
      const user = await userModel.findOne({ where: { email: email } });
      await user.update({ image: image });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getImage(req, res) {
    try {
      const usuarioId = await req.session.userid;
      const user = await userModel.findOne({ where: { id: usuarioId } });
      const imageUser = user.image;
      return res.status(200).json(imageUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
