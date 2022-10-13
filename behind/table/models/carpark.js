'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carpark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carpark.init({
    name: DataTypes.STRING,
    staytime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carpark',
  });
  return Carpark;
};