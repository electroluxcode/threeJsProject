'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Funnelcharts', [
      // 1
      {
        buildingdetailId:1,
        title:'当前建筑住户年龄结构',
        value:47,
        name:'20以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:1,
        title:'当前建筑住户年龄结构',
        value:100,
        name:'20-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:1,
        title:'当前建筑住户年龄结构',
        value:55,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:1,
        title:'当前建筑住户年龄结构',
        value:80,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:1,
        title:'当前建筑住户年龄结构',
        value:60,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 2
      {
        buildingdetailId:2,
        title:'当前建筑住户年龄结构',
        value:47,
        name:'20以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:2,
        title:'当前建筑住户年龄结构',
        value:90,
        name:'20-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:2,
        title:'当前建筑住户年龄结构',
        value:55,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:2,
        title:'当前建筑住户年龄结构',
        value:80,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:2,
        title:'当前建筑住户年龄结构',
        value:60,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3
      {
        buildingdetailId:3,
        title:'当前建筑住户年龄结构',
        value:31,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:3,
        title:'当前建筑住户年龄结构',
        value:71,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:3,
        title:'当前建筑住户年龄结构',
        value:67,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:3,
        title:'当前建筑住户年龄结构',
        value:73,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:3,
        title:'当前建筑住户年龄结构',
        value:54,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 4
      {
        buildingdetailId:4,
        title:'当前建筑住户年龄结构',
        value:47,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:4,
        title:'当前建筑住户年龄结构',
        value:90,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:4,
        title:'当前建筑住户年龄结构',
        value:55,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:4,
        title:'当前建筑住户年龄结构',
        value:80,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:4,
        title:'当前建筑住户年龄结构',
        value:60,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 5
      {
        buildingdetailId:5,
        title:'当前建筑住户年龄结构',
        value:47,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:5,
        title:'当前建筑住户年龄结构',
        value:99,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:5,
        title:'当前建筑住户年龄结构',
        value:82,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:5,
        title:'当前建筑住户年龄结构',
        value:73,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:5,
        title:'当前建筑住户年龄结构',
        value:28,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 6
      {
        buildingdetailId:6,
        title:'当前建筑住户年龄结构',
        value:86,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:6,
        title:'当前建筑住户年龄结构',
        value:61,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:6,
        title:'当前建筑住户年龄结构',
        value:22,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:6,
        title:'当前建筑住户年龄结构',
        value:94,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:6,
        title:'当前建筑住户年龄结构',
        value:87,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 7
      {
        buildingdetailId:7,
        title:'当前建筑住户年龄结构',
        value:96,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:7,
        title:'当前建筑住户年龄结构',
        value:68,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:7,
        title:'当前建筑住户年龄结构',
        value:39,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:7,
        title:'当前建筑住户年龄结构',
        value:45,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:7,
        title:'当前建筑住户年龄结构',
        value:56,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 8
      {
        buildingdetailId:8,
        title:'当前建筑住户年龄结构',
        value:69,
        name:'30以下',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:8,
        title:'当前建筑住户年龄结构',
        value:71,
        name:'30-30岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:8,
        title:'当前建筑住户年龄结构',
        value:49,
        name:'30-40岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:8,
        title:'当前建筑住户年龄结构',
        value:73,
        name:'40-50岁',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        buildingdetailId:8,
        title:'当前建筑住户年龄结构',
        value:54,
        name:'60岁以上',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Funnelcharts', null, {});
  }
};
