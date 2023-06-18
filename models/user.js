const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { UNAUTHORIZED } = require('../utils/constants');
const Unauthorized = require('../utils/errors/Unauthorized');

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: 'Incorrect email',
      },
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },

  },
  {
    statics: {
      findUserByCredentials(email, password) {
        return this.findOne({ email }).select('+password')
          .then((user) => {
            if (!user) return Promise.reject(new Unauthorized(UNAUTHORIZED));
            return bcrypt.compare(password, user.password)
              .then((matched) => {
                if (!matched) return Promise.reject(new Unauthorized(UNAUTHORIZED));
                return user;
              });
          });
      },
    },
  },
);
module.exports = model('user', userSchema);
