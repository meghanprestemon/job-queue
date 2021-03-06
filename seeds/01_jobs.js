
exports.seed = knex => knex('jobs').del()
  .then(() => knex('jobs').insert([
    {
      id: 1,
      url: 'https://www.google.com',
      response: '',
      status: 200,
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC'),
    },
    {
      id: 2,
      url: 'https://www.massdrop.com',
      response: '',
      status: 200,
      created_at: new Date('2016-07-29 14:26:16 UTC'),
      updated_at: new Date('2016-07-29 14:26:16 UTC'),
    },
    {
      id: 3,
      url: 'https://www.reddit.com',
      status: 0,
      created_at: new Date('2016-08-29 14:26:16 UTC'),
      updated_at: new Date('2016-08-29 14:26:16 UTC'),
    },
    {
      id: 4,
      url: 'badurl.com',
      response: 'error',
      status: 404,
      created_at: new Date('2016-08-30 14:26:16 UTC'),
      updated_at: new Date('2016-08-30 14:26:16 UTC'),
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'jobs_id_seq\', (SELECT MAX(id) FROM jobs))'));
