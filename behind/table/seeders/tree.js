'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trees', [
      {
        objectlistId: 1,
        name:'tree',
        healthycount:16,
        unhealthycount:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trees', null, {});
  }
};
