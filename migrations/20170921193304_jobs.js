
exports.up = knex =>
  knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    
  });

exports.down = knex => knex.schema.dropTable('jobs');
