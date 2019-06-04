'use strict';

const ObjectId = require('mongoose').Types.ObjectId;

const apiMiddlewares = {};

apiMiddlewares.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    return res.redirect('/private/login');
  }
};

apiMiddlewares.isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    return res.redirect('/private');
  }
};
module.exports = apiMiddlewares;
