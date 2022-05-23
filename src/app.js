require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const flash = require('express-flash');
const { tmpdir } = require('os');
const FileStore = require('session-file-store')(session);
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

const app = express();
const port = 3000;
const db = require('./database/db');

// Configurações do Express
app.use(cors());
app.use(express.json());

wss.on('connection', (client) => {
  client.on('message', (message, isBinary) => {
    [...wss.clients]
      .filter((c) => c !== client)
      .forEach((c) => c.send(isBinary ? message.toString() : message));
  });
});

// Configurações da sessão

app.use(
  session({
    name: 'session',
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: () => {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Configurações do Flash

app.use(flash());

// Configuração da sessão

app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

// Rotas da aplicação

const indexRouter = require('./routes/index');
const postRouter = require('./routes/forum.router');
const authRouter = require('./routes/auth.router');

app.use(indexRouter);
app.use(authRouter);
app.use(postRouter);

// Inicia o servidor
db.sync()
  .then(
    app.listen(port, () =>
      console.log(`Servidor rodando na porta: http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err));

module.exports = app;
