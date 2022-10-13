'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buildings', [
      {
        objectlistId: 1,
        name:'dep1',
        livecount:88,
        floorcount:5,
        checkinrate:"0.66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep2',
        livecount:5,
        floorcount:2,
        checkinrate:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep3',
        livecount:38,
        floorcount:6,
        checkinrate:"0.91",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep4',
        livecount:13,
        floorcount:3,
        checkinrate:"0.5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep5',
        livecount:33,
        floorcount:3,
        checkinrate:"0.33",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep6',
        livecount:4,
        floorcount:2,
        checkinrate:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep7',
        livecount:38,
        floorcount:5,
        checkinrate:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        objectlistId: 1,
        name:'dep8',
        livecount:70,
        floorcount:5,
        checkinrate:"0.98",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buildings', null, {});
  }
};
