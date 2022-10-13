'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Parkings', [
      {
        objectlistId: 1,
        name:'http',
        surpluscount:10,
        status:'开启',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Parkings', null, {});
  }
};
