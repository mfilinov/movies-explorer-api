const winston = require('winston');
const expressWinston = require('express-winston');
const { requestLogFilename, errorLogFilename } = require('../utils/config');

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: requestLogFilename }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: errorLogFilename }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
