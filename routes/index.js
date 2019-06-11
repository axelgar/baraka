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
        switch (result.category) {
        case 'mosaicos':
          mosaicos.push(result);
          break;
        case 'objetos-singulares':
          objetos.push(result);
          break;
        case 'cerámica':
          ceramicas.push(result);
          break;
        case 'alfombras':
          alfombras.push(result);
          break;
        case 'decoración':
          deco.push(result);
          break;
        default:
          break;
        }
      });
      const data = {
        mosaicos,
        deco,
        objetos,
        ceramicas,
        alfombras
      };
      res.render('index', data);
    })
    .catch(next);
});

module.exports = router;
