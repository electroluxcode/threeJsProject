'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Barcharts', [
      {
        name: '柱状图',
        title: '小区入住户数',
        date: '第一季度',
        forecastcount: 124,
        realcount: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '柱状图',
        title: '小区入住户数',
        date: '第二季度',
        forecastcount: 158,
        realcount: 162, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '柱状图',
        title: '小区入住户数',
        date: '第三季度',
        forecastcount: 191,
        realcount: 185, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '柱状图',
        title: '小区入住户数',
        date: '第四季度',
        forecastcount: 232,
        realcount: 192, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Barcharts', null, {});
  }
};
