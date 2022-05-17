const express = require('express');
const postController = require('../controllers/posts.controller');
const postsRouter = express.Router();

postsRouter.get('/posts', postController.getAllPosts);
postsRouter.post('/posts', postController.createPost);

module.exports = postsRouter;
