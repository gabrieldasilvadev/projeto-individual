const userModel = require('../models/user.model');

class AuthController {
  static login(req, res) {
    return res.render('auth/login');
  }

  static register(req, res) {
    try {
      const users = userModel.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerPost(req, res) {
    try {
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AuthController;
