'use strict';

const ObjectId = require('mongoose').Types.ObjectId;

const apiMiddlewares = {};

apiMiddlewares.checkValidId = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    res.status(401).json({ message: 'not valid' });
  }
  next();
};

apiMiddlewares.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 403;
    err.statusMessage = 'Unauthorized';
    next(err);
  }
};

apiMiddlewares.isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    const err = new Error('Unauthorized');
    err.status = 403;
    err.statusMessage = 'Unauthorized';
    next(err);
  }
};
module.exports = apiMiddlewares;
