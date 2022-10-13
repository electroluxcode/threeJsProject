'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Buildingdetails', [
      {
        name:'dep1',
        height:'15米',
        floor:5,
        square:'130平方米',
        malecount:120,
        femalecount:80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep2',
        height:'3米',
        floor:1,
        square:'50平方米',
        malecount:5,
        femalecount:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep3',
        height:'19米',
        floor:6,
        square:'80平方米',
        malecount:60,
        femalecount:55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep4',
        height:'15米',
        floor:5,
        square:'130平方米',
        malecount:20,
        femalecount:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep5',
        height:'7米',
        floor:2,
        square:'100平方米',
        malecount:24,
        femalecount:8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep6',
        height:'10米',
        floor:3,
        square:'100平方米',
        malecount:14,
        femalecount:8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep7',
        height:'22米',
        floor:7,
        square:'110平方米',
        malecount:40,
        femalecount:33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'dep8',
        height:'15米',
        floor:5,
        square:'130平方米',
        malecount:133,
        femalecount:124,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buildingdetails', null, {});
  }
};
