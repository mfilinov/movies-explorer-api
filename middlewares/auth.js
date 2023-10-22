const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const Unauthorized = require('../utils/errors/Unauthorized');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new Unauthorized());
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new Unauthorized());
    return;
  }
  req.user = payload;
  next();
};
