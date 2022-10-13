'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Basketballgrounds', [
      {
        objectlistId: 1,
        name:'baseketball',
        isempty:'是',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Basketballgrounds', null, {});
  }
};
