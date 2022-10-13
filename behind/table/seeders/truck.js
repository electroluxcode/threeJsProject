'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trucks', [
      {
        objectlistId: 1,
        name:'truck1',
        kilmeters:14672,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'truck2',
        kilmeters:35613,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'truck3',
        kilmeters:125323,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'truck4',
        kilmeters:53123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trucks', null, {});
  }
};
