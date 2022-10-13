'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buildstatuses', [
      {
        name:'dep1',
        type:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep2',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep3',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep4',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep5',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep6',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep7',
        type:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep8',
        type:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buildstatuses', null, {});
  }
};
