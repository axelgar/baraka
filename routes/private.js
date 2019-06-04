'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const apiMiddlewares = require('../middlewares/apiMiddlewares');
const User = require('../models/user.model');

router.get('/', apiMiddlewares.isLoggedIn, (req, res, next) => {
  res.render('private');
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
