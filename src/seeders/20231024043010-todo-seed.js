'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todos', [{
      title: 'mandi',
      description: 'membersihkan tubuh',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'makan',
      description: 'mengisi energi tubuh',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'tidur',
      description: 'mengistirahatkan tubuh',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'main',
      description: 'menghibur tubuh',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos', null, {})
  }
};
