"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Topics", [
      {
        subjectList: "HTML",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "CSS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "JQuery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "Timers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "Ajax",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
