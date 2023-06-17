const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { HTTP_STATUS_CREATED } = require('http2').constants;
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../utils/config');
const BadRequestError = require('../utils/errors/BadRequest');
const ConflictError = require('../utils/errors/Conflict');

const { ValidationError } = mongoose.Error;

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        name, email, password: hash,
      })
        .then(() => res.status(HTTP_STATUS_CREATED).send({
          data: { name, email },
        }))
        .catch((err) => {
          if (err instanceof ValidationError) {
            next(new BadRequestError(err.message));
          } else if (err.code === 11000) {
            next(new ConflictError(`User ${email} already exists`));
          } else {
            next(err);
          }
        });
    });
};

module.exports.updateUserBio = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, email }, { new: true, runValidators: true })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError(err.message));
      } else if (err.code === 11000) {
        next(new ConflictError(`User ${email} already exists`));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};
