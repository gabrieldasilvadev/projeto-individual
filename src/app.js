require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users.router');
const db = require('./database/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(usersRouter);

db.sync({ alter: true });
console.log(`Banco de dados conectado com sucesso: ${process.env.DB_NAME}`);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
