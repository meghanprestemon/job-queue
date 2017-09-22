module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'job_queue',
      user: 'meghan',
      password: 'jobs',
      host: 'postgres',
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'job_queue_test',
      user:     'meghan',
      password: 'jobs',
      host: 'postgres_test'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
