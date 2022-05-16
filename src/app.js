require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users.router');
const db = require('./database/db');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(usersRouter);

db.sync({ alter: true });

app.listen(port, () =>
  console.log(`Servidor rodando na porta: http://localhost:${port}`)
);

module.exports = app;
