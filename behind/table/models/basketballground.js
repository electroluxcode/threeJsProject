'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basketballground extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Basketballground.belongsTo(models.Objectlist)
    }
  }
  Basketballground.init({
    objectlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    isempty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Basketballground',
  });
  return Basketballground;
};