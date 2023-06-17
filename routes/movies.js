const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateParamsMovieId, validateCreateMovie } = require('../utils/validationApi');

router.get('/', getMovies);
router.post('/', validateCreateMovie, createMovie);
router.delete('/:movieId', validateParamsMovieId, deleteMovie);

module.exports = router;
