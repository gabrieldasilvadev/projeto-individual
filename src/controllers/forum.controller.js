const postModal = require('../models/post.model');

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
      const { post, fkUsuario } = req.body;
      const usuarioId = await req.session.userid;
      const newPost = {
        post,
        fkUsuario: usuarioId,
      };

      if (!post) {
        throw new Error('message: Preencha o campo post');
      }

      const postCreated = await postModal.create(newPost);
      return res.status(200).json(postCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = postController;
