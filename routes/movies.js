const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateParamsCardId, validateCreateCard } = require('../utils/validationApi');

router.get('/', getMovies);
router.post('/', validateCreateCard, createMovie);
router.delete('/:movieId', validateParamsCardId, deleteMovie);

module.exports = router;
