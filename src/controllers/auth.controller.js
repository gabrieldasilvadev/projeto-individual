const userModel = require('../models/user.model');

const bcrypt = require('bcryptjs');

class AuthController {
  static list(req, res) {
    try {
      const users = userModel.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async loginPost(req, res) {
    const { email, senha } = req.body;
    console.log(req.body);
    const user = await userModel.findOne({ where: { email: email } });

    if (!user) {
      console.log('message', 'Usuário não encontrado');
      res.redirect('/login');
      return;
    }

    const passwordMatch = bcrypt.compareSync(senha, user.senha);

    if (!passwordMatch) {
      console.log('message', 'Senha incorreta');
      res.redirect('/register');
      return;
    }

    req.session.userid = user.id;
    console.log('message', 'Usuário logado com sucesso');

    req.session.save(() => {
      res.redirect('/');
    });
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
      req.flash('success', 'Usuário cadastrado com sucesso');
      req.session.save(() => {
        res.redirect('/');
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
  }
}

module.exports = AuthController;
