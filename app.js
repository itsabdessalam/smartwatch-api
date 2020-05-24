const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const database = require('./database');
const rateLimit = require('express-rate-limit');
const auth = require('./middleware/auth');
const port = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // default 1 minute
    max: 100,
  }),
);
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
  }),
);
app.use(auth);
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use((request, response, next) => {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  return response.status(error.status || 500).json({
    statusCode: error.status || 500,
    error: 'No route defined',
    message: error.message,
  });
});
const start = async () => {
  try {
    await database.connect();
    await app.listen(port);
    console.log(`Server listening on ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
