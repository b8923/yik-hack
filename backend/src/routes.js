const express = require('express');
const routes = express.Router();

const AuthController = require("./controllers/Auth");
const PostController = require("./controllers/Post");
const PostUpvoteController = require("./controllers/PostUpvote");
const PostDownvoteController = require("./controllers/PostDownvote");

routes.post("/auth/signup", AuthController.signup);
routes.post("/auth/login", AuthController.login);

/* Guarded routes */

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.store);
routes.delete("/posts/:id", PostController.destroy);

routes.post("/posts/:id/upvote", PostUpvoteController.store);
routes.post("/posts/:id/downvote", PostDownvoteController.store);
// see posts comments
// create a comment

module.exports = routes;