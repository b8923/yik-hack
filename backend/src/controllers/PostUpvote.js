const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
      const post = await Post.findOne({ _id: req.params.id });
      
      if (!post.upvotes.includes(req.headers.user)) {
        post.upvotes.push(req.headers.user);
      }

      if (post.downvotes.includes(req.headers.user)) {
        post.downvotes = post.downvotes.filter(downvote => String(downvote) !== req.headers.user);
      }

      await post.save();
      return res.json(post);
  }
};