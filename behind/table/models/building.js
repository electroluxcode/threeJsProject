'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Building.belongsTo(models.Objectlist)
    }
  }
  Building.init({
    objectlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    livecount: DataTypes.INTEGER,
    floorcount: DataTypes.INTEGER,
    checkinrate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Building',
  });
  return Building;
};