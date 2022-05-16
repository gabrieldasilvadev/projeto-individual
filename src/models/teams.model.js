const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database/db');
const Universe = require('./universes.model');

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
  },
});

Team.hasMany(Universe, {
  constraints: true,
  foreignKey: 'fkTeam',
});

module.exports = Team;
