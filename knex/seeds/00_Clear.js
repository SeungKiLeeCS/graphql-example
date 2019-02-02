exports.seed = async function(knex, Promise) {
  const whitelist = ['knex_migrations', 'knex_migrations_lock'];
  const data = await knex.raw(
    'SELECT tablename FROM pg_tables WHERE schemaname='public''
  );

  const tables = data.rows
    .map(r => r.tablename)
    .filter(d => !whitelist.includes(d));
  await knex.raw(`TRUNCATE ${tables.join(',')} CASCADE`);
};
