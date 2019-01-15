const operatorsAliases = require('./operatorsAliases')

console.log(process.env, 'env')

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: {
      ...operatorsAliases
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
}
