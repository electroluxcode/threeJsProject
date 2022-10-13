'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funnelchart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Funnelchart.belongsTo(models.Buildingdetail)
    }
  }
  Funnelchart.init({
    buildingdetailId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    value: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funnelchart',
  });
  return Funnelchart;
};