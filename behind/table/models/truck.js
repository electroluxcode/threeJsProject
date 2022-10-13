'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Truck.belongsTo(models.Objectlist)
    }
  }
  Truck.init({
    objectlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    kilmeters: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Truck',
  });
  return Truck;
};