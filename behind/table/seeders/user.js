'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username:'admin',
        password:'123456',
        type:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username:'xiaohong',
        password:'123456',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username:'test',
        password:'123456',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
