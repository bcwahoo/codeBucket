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
        topicName: "Timers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Ajax",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Firebase",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Nodejs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "JS Constructors",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "MySQL",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Express",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Handelbars",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topicName: "Sequelize",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
