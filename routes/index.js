'use strict';

const express = require('express');
const router = express.Router();

const Image = require('../models/image.model');

/* GET home page. */
router.get('/', (req, res, next) => {
  Image.find()
    .then((results) => {
      let mosaicos = [];
      let deco = [];
      let objetos = [];
      let ceramicas = [];
      let alfombras = [];
      results.forEach(result => {
        if (result.category === 'mosaicos') {
          mosaicos.push(result);
        }
        if (result.category === 'objetos-singulares') {
          objetos.push(result);
        }
        if (result.category === 'cerámica') {
          ceramicas.push(result);
        }
        if (result.category === 'alfombras') {
          alfombras.push(result);
        }
        if (result.category === 'decoración') {
          deco.push(result);
        }
      });
      const data = {
        mosaicos,
        deco,
        objetos,
        ceramicas,
        alfombras
      };
      console.log(data);
      res.render('index', data);
    })
    .catch(next);
});

module.exports = router;
