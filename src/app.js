require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();
const port = 3000;
const db = require('./database/db');

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');


app.use(cors());

app.use(express.static('public'));
app.use(express.json());
app.use(usersRouter);
app.use(postsRouter);

db.sync();

app.listen(port, () =>
  console.log(`Servidor rodando na porta: http://localhost:${port}`)
);

module.exports = app;
