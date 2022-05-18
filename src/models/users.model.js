const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Item = require('./items.model');
const Post = require('./posts.model');

const User = db.define('usuario', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      customValidaro(value) {
        if (value === null || value <= 2) {
          throw new Error('Email invalido');
        }
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  senha: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  universo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  nivel: {
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
  foreignKey: 'fkUsuario',
});
User.hasMany(Post, {
  constraints: true,
  foreignKey: 'fkUsuario',
});
module.exports = User;
