if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();
const mongodb_url = process.env.MONGODB_URL || '';

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
