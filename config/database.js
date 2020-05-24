const defaultsTo = require('defaults-to');
const env = require('./env');

module.exports = {
  mongodb: {
    client: 'mongodb',
    connection: {
      host: defaultsTo(env.DB_HOST, 'localhost'),
      port: defaultsTo(env.DB_PORT, ''),
      user: defaultsTo(env.DB_USER, 'root'),
      password: defaultsTo(env.DB_PASSWORD, ''),
      database: defaultsTo(env.DB_DATABASE, 'db'),
    },
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  },
};
