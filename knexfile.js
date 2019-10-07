module.exports = {
  development: {
    client: 'sqlite3', // db driver
    connection: {
      filename: './data/posts.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
