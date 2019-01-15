'use strict'
module.exports = function (sequelize, DataTypes) {
  var DummyHotel = sequelize.define('DummyHotel', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return DummyHotel
}
