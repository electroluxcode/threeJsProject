'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        objectlistId: 1,
        name:'car1',
        license:'粤Q15234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'car2',
        license:'粤Q96245',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'car3',
        license:'粤Q13531',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'car4',
        license:'粤Q12315',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
