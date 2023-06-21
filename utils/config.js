const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev';
const MONGO_DB = process.env.MONGO_DB || 'mongodb://127.0.0.1:27017/bitfilmsdb';
const APP_PORT = process.env.APP_PORT || 3000;
const MONGO_OPTIONS = {
  useNewUrlParser: true,
};
const requestLogFilename = 'request.log';
const errorLogFilename = 'error.log';

module.exports = {
  JWT_SECRET, APP_PORT, MONGO_OPTIONS, MONGO_DB, requestLogFilename, errorLogFilename,
};
