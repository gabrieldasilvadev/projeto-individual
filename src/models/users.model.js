const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/db');
const Item = require('./items.model');

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
    validate: {
      customValidaro(value) {
        if (value === null || value <= 2) {
          throw new Error('Email invalido');
        }
      },
    },
  },
  sobrenome: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now,
    allowNull: true,
  },
});

User.hasMany(Item, {
  constraints: true,
  foreignKey: 'fkUsuario',
});

module.exports = User;
