const { celebrate, Joi } = require('celebrate');

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const nameSchema = Joi.string().min(2).max(30).required();
const emailSchema = Joi.string().email().required()
const passwordSchema = Joi.string().min(8).max(30).required();

const validateUserBio = celebrate({
  body: Joi.object().keys({
    name: nameSchema,
    email: emailSchema,
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().length(4).required(),
    description: Joi.string().required(),
    image: Joi.string().regex(URL_REGEX).required(),
    trailerLink: Joi.string().regex(URL_REGEX).required(),
    thumbnail: Joi.string().regex(URL_REGEX).required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateParamsMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).required(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: emailSchema,
    password: passwordSchema,
  }),
});

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
  }),
});

module.exports = {
  validateUserBio,
  validateCreateMovie,
  validateParamsMovieId,
  validateLogin,
  validateCreateUser,
};
