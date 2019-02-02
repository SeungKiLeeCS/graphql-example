const Knex = require('knex');
const Repository = require('./repository');
const { pgConnection } = require('../config');

const knex = Knex({
  client: 'pg',
  connection: pgConnection
});

const db = {};

const tables = ['users', 'posts', 'checkins', 'ads'];
for (const table of tables) {
  db[table] = new Repository(knex, table);
}

module.exports = db;
