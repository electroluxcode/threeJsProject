'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Parking.belongsTo(models.Objectlist)
    }
  }
  Parking.init({
    objectlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surpluscount: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};