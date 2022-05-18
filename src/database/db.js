require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
  }
);

try {
  sequelize.authenticate();
  console.log('Banco de dados conectado com sucesso!');
} catch (err) {
  console.log(`Erro ao conectar com o banco de dados: ${err}`);
}

module.exports = sequelize;
