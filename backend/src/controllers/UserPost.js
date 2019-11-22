const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
      try {
          const posts = await Post.find({ author: req.headers.user });

          return res.json(posts);
      } catch (err) {
          return res.status(500).json({ error: err });
      }
  }
}