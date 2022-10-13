'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      objectlistId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      livecount: {
        type: Sequelize.INTEGER
      },
      floorcount: {
        type: Sequelize.INTEGER
      },
      checkinrate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Buildings');
  }
};