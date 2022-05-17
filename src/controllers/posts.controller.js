const postModal = require('../models/posts.model');

class postController {
  static async getAllPosts(req, res) {
    try {
      const posts = await postModal.findAll();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPost(req, res) {
    try {
      const newPost = await postModal.create(req.body);
      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = postController;
