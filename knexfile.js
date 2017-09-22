module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // filename: './dev.sqlite3'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'jobs'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
