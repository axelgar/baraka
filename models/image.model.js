'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const imageSchema = new Schema({
  name: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
