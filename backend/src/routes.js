const express = require('express');
const routes = express.Router();

const AuthController = require("./controllers/Auth");

routes.post("/auth/signup", AuthController.signup);
routes.post("/auth/login", AuthController.login);


/* Guarded routes */

// see all posts in range
// create post (with limit of characters)
// delete post
// upvote/downvote post
// see posts comments
// create a comment

module.exports = routes;