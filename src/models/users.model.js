const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/db');
const Item = require('./items.model');
const Team = require('./teams.model');

const User = db.define('usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  sexo: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  senha: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now,
    allowNull: false,
  },
});

User.hasMany(Item, {
  constraints: true,
  foreignKey: 'fkUser',
});

module.exports = User;
