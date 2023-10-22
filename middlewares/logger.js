const winston = require('winston');
const expressWinston = require('express-winston');
const { REQUEST_LOGS_FILENAME, ERROR_LOGS_FILENAME } = require('../utils/constants');

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: REQUEST_LOGS_FILENAME }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: ERROR_LOGS_FILENAME }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
