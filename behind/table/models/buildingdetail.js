'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buildingdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Buildingdetail.hasMany(models.Funnelchart)
    }
  }
  Buildingdetail.init({
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    square: DataTypes.STRING,
    malecount: DataTypes.INTEGER,
    femalecount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buildingdetail',
  });
  return Buildingdetail;
};