const express = require('express');
const routes = express.Router();

const AuthController = require("./controllers/Auth");
const PostController = require("./controllers/Post");

routes.post("/auth/signup", AuthController.signup);
routes.post("/auth/login", AuthController.login);


/* Guarded routes */

routes.get("/posts", PostController.index);
routes.post("/posts", PostController.store);
routes.delete("/posts/:id", PostController.destroy);

// upvote/downvote post
// see posts comments
// create a comment

module.exports = routes;