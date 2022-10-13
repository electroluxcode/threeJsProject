'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barchart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barchart.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    forecastcount: DataTypes.INTEGER,
    realcount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barchart',
  });
  return Barchart;
};