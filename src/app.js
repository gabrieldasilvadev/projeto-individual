require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const flash = require('express-flash');
const { tmpdir } = require('os');
const FileStore = require('session-file-store')(session);

const app = express();
const port = 3000;
const db = require('./database/db');

// const usersRouter = require('./routes/user.router');
// const postsRouter = require('./routes/post.router');
const authRouter = require('./routes/auth.router');

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    name: 'session',
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
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

app.use(flash());

app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

app.use(authRouter);

// app.use(usersRouter);
// app.use(postsRouter);

// .sync({ force: true })
db.sync()
  .then(
    app.listen(port, () =>
      console.log(`Servidor rodando na porta: http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err));

module.exports = app;
