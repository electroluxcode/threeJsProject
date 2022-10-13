'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Raycharts', [
      {
        name:'雷达图',
        title:'小区空气质量检测',
        date:'Morning',
        aqi:234,
        pm2:185,
        pm10:230,
        co:4.09,
        no2:123,
        so2:69,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'雷达图',
        title:'小区空气质量检测',
        date:'Afternoon',
        aqi:146,
        pm2:84,
        pm10:139,
        co:1.094,
        no2:40,
        so2:17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'雷达图',
        title:'小区空气质量检测',
        date:'Evening',
        aqi:188,
        pm2:143,
        pm10:197,
        co:1.66,
        no2:99,
        so2:51,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Raycharts', null, {});
  }
};
