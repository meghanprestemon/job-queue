
exports.seed = knex => knex('jobs').del()
  .then(() => knex('users').insert([
      // {id: 1, colName: 'rowValue1'},
      // {id: 2, colName: 'rowValue2'},
      // {id: 3, colName: 'rowValue3'}
    ]))
    .then(() => knex.raw('SELECT setval(\'jobs_id_seq\', (SELECT MAX(id) FROM jobs))'));
