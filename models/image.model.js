'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const imageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['mosaicos', 'decoración', 'objetos-singulares', 'cerámica', 'alfombras'],
    required: true
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
