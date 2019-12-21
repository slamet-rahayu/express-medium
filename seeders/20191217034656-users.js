'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
    */
      return queryInterface.bulkInsert('users', [{
        email: 'sl@m.et',
        password:'1234',
        fullname: 'John doe',
        username: '@jessjane',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        email: 'joe@jon.on',
        password:'1234',
        fullname: 'John silo',
        username: '@john silo',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        email: 'j@ne.on',
        password:'1234',
        fullname: 'Jess jane',
        username: '@jessjane',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
