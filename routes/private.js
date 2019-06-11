'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
<<<<<<< HEAD
const ObjectId = require('mongoose').Types.ObjectId;
const saltRounds = 10;
=======
>>>>>>> c159def2d266368147e24e943891c3acab72d82f

const apiMiddlewares = require('../middlewares/apiMiddlewares');
const User = require('../models/user.model');
const Image = require('../models/image.model');

router.get('/', apiMiddlewares.isLoggedIn, (req, res, next) => {
  const formData = req.flash('dashboard-form-data');
  const formErrors = req.flash('dashboard-form-error');
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
        alfombras,
        user: req.session.currentUser.username,
        message: formErrors[0],
        fields: formData[0]
      };
      res.render('private', data);
    })
    .catch(next);
});

router.post('/update/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(req.body);
  let { title, category } = req.body;
  let url;
  Image.findById(id)
    .then((result) => {
      console.log(result);
      url = result.url;
      if (req.file) {
        url = req.file.url;
      }
      if (!title || !category) {
        req.flash('dashboard-form-error', 'Mandatory fields!');
        req.flash('dasboard-form-data', { title, category });
        console.log('error');
        return res.redirect(`/private`);
      }

      const update = { title, category, url };
      return Image.findByIdAndUpdate(id, update, { new: true })
        .then((result) => {
          console.log('ok');
          res.redirect('/private');
        });
    })
    .catch(next);
});

router.post('/delete/:id', (req, res, next) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.redirect('/private');
  }

  Image.remove({ _id: id })
    .then(() => {
      res.redirect('/private');
    })
    .catch(next);
});

router.get('/login', apiMiddlewares.isNotLoggedIn, (req, res, next) => {
  const formData = req.flash('login-data');
  const formErrors = req.flash('login-error');
  const data = {
    message: formErrors[0],
    fields: formData[0]
  };
  res.render('login', data);
});

router.post('/login', apiMiddlewares.isNotLoggedIn, (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    req.flash('login-error', 'username and password are mandatory!');
    return res.redirect('/private/login');
  }
  User.findOne({ username })
    .then((result) => {
      if (!result) {
        req.flash('login-error', 'User doesn\'t exist');
        return res.redirect('/private/login');
      }
      if (!bcrypt.compareSync(password, result.password)) {
        req.flash('login-error', 'Password is incorrect');
        return res.redirect('/private/login');
      }
      req.session.currentUser = result;
      res.redirect('/private');
    });
});

router.post('/logout', (req, res, next) => {
  delete req.session.currentUser;
  res.redirect('/');
});

module.exports = router;
