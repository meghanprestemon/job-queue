
exports.seed = knex => knex('jobs').del()
  .then(() => knex('jobs').insert([
      {
        id: 1,
        url: 'www.google.com',
        response: '',
        status: true,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC'),
      },
      {
        id: 2,
        url: 'www.massdrop.com',
        response: '',
        status: true,
        created_at: new Date('2016-07-29 14:26:16 UTC'),
        updated_at: new Date('2016-07-29 14:26:16 UTC'),
      },
      {
        id: 3,
        url: 'www.reddit.com',
        response: '',
        status: true,
        created_at: new Date('2016-08-29 14:26:16 UTC'),
        updated_at: new Date('2016-08-29 14:26:16 UTC'),
      },
    ]))
    .then(() => knex.raw('SELECT setval(\'jobs_id_seq\', (SELECT MAX(id) FROM jobs))'));
