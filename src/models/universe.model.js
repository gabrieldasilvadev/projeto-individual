const { DataTypes } = require('sequelize');
const db = require('../database/db');

const Universe = db.define('universo', {
  idUniverso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
});

// module.exports = Universe;
