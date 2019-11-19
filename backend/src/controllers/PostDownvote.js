const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
      const post = await Post.findOne({ _id: req.params.id });

      if (!post.downvotes.includes(req.headers.user)) {
        post.downvotes.push(req.headers.user);
      }

      if (post.upvotes.includes(req.headers.user)) {
        post.upvotes = post.upvotes.filter(upvote => String(upvote) !== req.headers.user);
      }

      await post.save();
      return res.json(post);
  }
};