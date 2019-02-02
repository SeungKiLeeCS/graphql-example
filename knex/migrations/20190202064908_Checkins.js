exports.up = function(knex, Promise) {
  return knex.schema.createTable('checkins', t => {
    t.increments('id').primary();
    t.timestamp('created_at').notNullable();
    t.timestamp('updated_at').notNullable();
    t.float('latitude').notNullable();
    t.float('longitude').notNullable();
    t.integer('user_id').notNullable().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('checkins');
};
