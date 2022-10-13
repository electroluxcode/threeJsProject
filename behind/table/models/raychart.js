'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raychart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Raychart.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    aqi: DataTypes.FLOAT,
    pm2: DataTypes.FLOAT,
    pm10: DataTypes.FLOAT,
    co: DataTypes.FLOAT,
    no2: DataTypes.FLOAT,
    so2: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Raychart',
  });
  return Raychart;
};