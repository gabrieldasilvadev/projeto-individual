const userModel = require('../models/user.model');

const bcrypt = require('bcryptjs');

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
    const { nome, email, time, universo, nivel, senha } = req.body;

    const checkIfUserExists = await userModel.findOne({
      where: { email: email },
    });

    if (checkIfUserExists) {
      console.log('message', 'Email já cadastrado');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);
    const newUser = {
      nome,
      email,
      time,
      universo,
      nivel,
      senha: hashedPassword,
    };
    try {
      await userModel.create(newUser);

      req.session.userid = newUser.id;
      req.flash('success', 'Usuário cadastrado com sucesso', idRandom);
      req.session.save(() => {
        res.redirect('/');
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AuthController;
