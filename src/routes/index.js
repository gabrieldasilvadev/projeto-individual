const express = require('express');
const app = require('../app');
const checkAuth = require('../helpers/checkAuth');

const indexRouter = require('express').Router();

// indexRouter.use('/', express.static('public/index.html'));
indexRouter.use('/forum', checkAuth, express.static('public/pages/forum.html'));
indexRouter.use('/pages', checkAuth, (req, res) => {
  res.redirect('/');
  return;
});
indexRouter.use('/auth', express.static('public/pages/register-login.html'));
indexRouter.use(express.static('public'));

module.exports = indexRouter;
