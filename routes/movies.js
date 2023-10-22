const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateParamsMovieId, validateCreateMovie } = require('../utils/validationApi');

router.route('/')
  .get(getMovies)
  .post(validateCreateMovie, createMovie);

router.route('/:movieId')
  .delete(validateParamsMovieId, deleteMovie);

module.exports = router;
