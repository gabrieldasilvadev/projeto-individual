const { DataTypes } = require('sequelize');
const db = require('../database/db');

const Post = db.define('post', {
  post: {
    type: DataTypes.TEXT,
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

module.exports = Post;
