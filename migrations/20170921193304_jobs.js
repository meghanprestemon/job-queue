
exports.up = knex =>
  knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('url', 255).notNullable();
    table.text('response');
    table.boolean('status').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable('jobs');
