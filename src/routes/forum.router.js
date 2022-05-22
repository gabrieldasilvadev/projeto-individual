const express = require('express');
const postController = require('../controllers/forum.controller');
const postRouter = express.Router();

const checkAuth = require('../helpers/checkAuth');

postRouter.get('/api/forum', checkAuth, postController.getAllPosts);
postRouter.post('/api/create-post', checkAuth, postController.createPost);

module.exports = postRouter;
