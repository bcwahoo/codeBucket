"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Subjects", [
      {
        subjectName: "What is HTML?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "HTML Elements",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "HTML Forms",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "HTML Comments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "What is CSS?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "CSS Selectors",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "CSS Colors",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "CSS Units",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "What is Javascript?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "Javascript Methods",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "Javascript Objects",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "Javascript Loops",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "What is JQuery?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "JQuery Events",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "JQuery Syntax",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectName: "JQuery #ID Selector",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Subjects", null, {});
  }
};
