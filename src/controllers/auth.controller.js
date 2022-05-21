const userModel = require('../models/user.model');

const bcrypt = require('bcryptjs');

class AuthController {
  static async list(req, res) {
    try {
      const users = await userModel.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async loginPost(req, res) {
    try {
      const { email, senha } = req.body;
      console.log(req.body);
      const user = await userModel.findOne({ where: { email: email } });

      if (!user) {
        throw new Error('message: Usuário não encontrado');
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
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }

  static async registerPost(req, res) {
    try {
      const { nome, email, time, universo, nivel, senha } = req.body;

      const checkIfUserExists = await userModel.findOne({
        where: { email: email },
      });

      if (checkIfUserExists) {
        throw new Error('message: Email já cadastrado');
      }

      if (!nome || !email || !time || !universo || !nivel || !senha) {
        throw new Error('message: Preencha todos os campos');
      }

      console.log(req.body);
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

      await userModel.create(newUser);

      req.session.userid = newUser.id;
      console.log('success', 'Usuário cadastrado com sucesso');
      req.session.save(() => {
        res.redirect('/');
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = AuthController;
