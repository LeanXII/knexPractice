require('dotenv').config()

const connectionString = process.env.DB_CONNECTION_STRING;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'postgresql',
    connection: connectionString,
  },

  staging: {
    client: 'pg',
    connection: {
      host: "localhost",
      port: 5432,
      database: "MYDatabase",
      user: "postgres",
      password: "docker"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
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
      tableName: 'knex_migrations'
    }
  }

};
