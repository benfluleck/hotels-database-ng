const Sequelize = require('sequelize')

class DummyHotel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        location: DataTypes.STRING
      },
      { sequelize }
    )
  }

  static associate(models) {
    // define associations here
  }
}

module.exports = DummyHotel
