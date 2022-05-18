const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./users.model');

const Post = db.define('post', {
  idPost: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
