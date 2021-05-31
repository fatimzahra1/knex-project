// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knex",
      user: "fatimaezzahraaelmadini",
      password: null,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
