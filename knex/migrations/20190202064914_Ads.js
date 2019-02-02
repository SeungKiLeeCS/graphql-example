exports.up = function(knex, Promise) {
  return knex.schema.createTable('ads', t => {
    t.increments('id').primary();
    t.timestamp('created_at').notNullable();
    t.timestamp('updated_at').notNullable();
    t.text('content').notNullable();
    t.text('link');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ads');
};
