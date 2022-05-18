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

const ONE_DAY = 24 * 60 * 60 * 1000;

app.use(
  session({
    name: 'session-id',
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: () => {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: ONE_DAY,
      expires: new Date(Date.now() + ONE_DAY),
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

// app.use(usersRouter);
// app.use(postsRouter);
app.use(authRouter);


// .sync({ force: true })
db.sync()
  .then(
    app.listen(port, () =>
      console.log(`Servidor rodando na porta: http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err));

module.exports = app;
