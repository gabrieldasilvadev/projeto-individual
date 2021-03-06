const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Universe = require('./universe.model');

const Team = db.define('time', {
  idTime: {
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

Team.hasMany(Universe, {
  constraints: true,
  foreignKey: 'fkTime',
});

// module.exports = Team;
