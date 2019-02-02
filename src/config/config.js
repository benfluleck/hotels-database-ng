const operatorsAliases = require('./operatorsAliases')

require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: {
      ...operatorsAliases
    }
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory'
  }
}
