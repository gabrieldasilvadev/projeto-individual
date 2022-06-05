const express = require('express');
const checkAuth = require('../helpers/checkAuth');
const indexRouter = require('express').Router();

indexRouter.use('/chat', checkAuth, express.static('public/pages/forum.html'));
indexRouter.use('/pages', checkAuth, (req, res) => {
  res.redirect('/');
  return;
});
indexRouter.use('/auth', express.static('public/pages/register-login.html'));

indexRouter.use('/items', checkAuth, express.static('public/pages/items.html'));
indexRouter.use('/dashboard', checkAuth, express.static('public/pages/dashboard.html'));

indexRouter.use(express.static('public'));

module.exports = indexRouter;
