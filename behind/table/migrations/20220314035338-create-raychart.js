'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Raycharts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      aqi: {
        type: Sequelize.FLOAT
      },
      pm2: {
        type: Sequelize.FLOAT
      },
      pm10: {
        type: Sequelize.FLOAT
      },
      co: {
        type: Sequelize.FLOAT
      },
      no2: {
        type: Sequelize.FLOAT
      },
      so2: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Raycharts');
  }
};