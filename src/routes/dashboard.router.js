const express = require('express');
const dashboardController = require('../controllers/dashboard.controller');
const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard-get', dashboardController.dashboardGet);

module.exports = dashboardRouter;
