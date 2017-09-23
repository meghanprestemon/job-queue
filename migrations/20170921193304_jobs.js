
exports.up = knex =>
  knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('url', 255).notNullable();
    table.text('response');
    table.integer('status').notNullable().defaultTo(0);
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('jobs');
