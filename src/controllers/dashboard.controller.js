const userModel = require('../models/user.model');

class dashboardController {
  static async dashboardGet(req, res) {
    try {
      const usuarioId = await req.session.userid;
      const usuario = await userModel.findOne({ where: { id: usuarioId } });
      const nomeUsuario = usuario.nome;

      const dataUser = await userModel.findAll({
        where: { id: usuarioId },
        attributes: ['id', 'nome', 'email', 'universo', 'time', 'nivel'],
      });

      return res.status(200).json({ nomeUsuario, dataUser });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = dashboardController;
