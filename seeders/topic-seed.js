"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Topics", [
      {
        topicName: "HTML",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "CSS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "JQuery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Bootstrap 4",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
