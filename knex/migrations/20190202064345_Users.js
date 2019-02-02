exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.timestamp('created_at').notNullable();
    t.timestamp('updated_at').notNullable();
    t.text('name').notNullable();
    t.text('picture').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
