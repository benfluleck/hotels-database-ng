const operatorsAliases = require('./operatorsAliases')

require('dotenv').config()

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
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.TEST_HOST,
    dialect: 'sqlite'
  }
}
