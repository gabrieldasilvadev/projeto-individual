const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/db');

const Item = db.define('item', {
  idProduto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  estrelas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Item;