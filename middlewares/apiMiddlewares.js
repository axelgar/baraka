'use strict';

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
