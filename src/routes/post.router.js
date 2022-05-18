const express = require('express');
const postController = require('../controllers/post.controller');
const postRouter = express.Router();

postRouter.get('/posts', postController.getAllPosts);
postRouter.post('/posts', postController.createPost);

module.exports = postRouter;
