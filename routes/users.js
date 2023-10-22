const router = require('express').Router();
const { getUser, updateUserBio } = require('../controllers/users');
const { validateUserBio } = require('../utils/validationApi');

router.route('/me')
  .get(getUser)
  .patch(validateUserBio, updateUserBio);

module.exports = router;
