'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Tree.belongsTo(models.Objectlist)
    }
  }
  Tree.init({
    objectlistId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    healthycount: DataTypes.INTEGER,
    unhealthycount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};