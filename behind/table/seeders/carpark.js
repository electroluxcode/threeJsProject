'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carparks', [
      {
        name:'car1',
        staytime:27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'car2',
        staytime:57,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'car3',
        staytime:36,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'car4',
        staytime:75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carparks', null, {});
  }
};
