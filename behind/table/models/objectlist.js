'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objectlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Objectlist.hasMany(models.Truck)
      models.Objectlist.hasMany(models.Car)
      models.Objectlist.hasMany(models.Building)
      models.Objectlist.hasMany(models.Basketballground)
      models.Objectlist.hasMany(models.Bus)
      models.Objectlist.hasMany(models.Tree)
      models.Objectlist.hasMany(models.Parking)
    }
  }
  Objectlist.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Objectlist',
  });
  return Objectlist;
};