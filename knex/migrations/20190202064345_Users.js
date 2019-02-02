exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.text('name').notNullable();
    t.text('picture').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
