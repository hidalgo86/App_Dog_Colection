'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dogs', [{
      id: "c9239537-ca2e-4d44-a758-d032fc44636f",
      name: 'John',
      height: '2 - 4',
      weight: '3 - 6',
      lifeSpan: '5 - 8',
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dogs', null, {});
  }
};