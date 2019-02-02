const { pgConnection } = require('./config');

module.exports = {
  client: 'pg',
  connection: pgConnection,

  migrations: {
    directory: './knex/migrations'
  },

  seeds: {
    directory: './knex/seeds'
  }
};
