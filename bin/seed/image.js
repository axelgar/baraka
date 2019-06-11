'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const data = require('../../data/image.js');

const Image = require('../../models/image.model.js');

const options = {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to Mongo!');
    return Image.remove({});
  })
  .then((result) => {
    console.log('Empty db');
    return Image.insertMany(data);
  })
  .then((results) => {
    console.log('You have some images', results.length);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('There is a problem', error);
  });
