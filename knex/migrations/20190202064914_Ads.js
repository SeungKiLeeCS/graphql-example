exports.up = function(knex, Promise) {
  return knex.schema.createTable('ads', t => {
    t.increments('id').primary();
    t.text('content').notNullable();
    t.text('link');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ads');
};
