const mongoose = require('mongoose');
const { HTTP_STATUS_CREATED } = require('http2').constants;
const Movie = require('../models/movie');
const BadRequestError = require('../utils/errors/BadRequest');
const NotFoundError = require('../utils/errors/NotFound');
const ForbiddenError = require('../utils/errors/Forbidden');

const { ValidationError } = mongoose.Error;

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({ owner: req.user._id, ...req.body })
    .then((movie) => res.status(HTTP_STATUS_CREATED).send({ data: movie }))
    .catch((err) => {
      if (err instanceof ValidationError) {
        next(new BadRequestError(err.message));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(new NotFoundError(`Movie with id=${req.params.movieId} not found`))
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) return next(new ForbiddenError());
      return Movie.deleteOne(movie).then(() => res.send({ data: movie }));
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
