'use strict';

const express = require('express');
const router = express.Router();

const Image = require('../models/image.model');

/* GET home page. */
router.get('/', (req, res, next) => {
  Image.find()
    .then((result) => {
      const data = { images: result };
      console.log(data);
      res.render('index', data);
    })
    .catch(next);
});

module.exports = router;
