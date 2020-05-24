module.exports = {
  getDatabaseURL(config, suffix) {
    const { client, connection } = config;
    const { host, user, password, port, database } = connection;
    return `${suffix ? client + suffix : client}://${user}:${password}@${host}${
      port ? ':' + port : ''
    }/${database}`;
  },
};
