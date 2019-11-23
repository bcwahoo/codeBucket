"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Subjects", [
      {
        subjectList: "What is HTML?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "HTML Elements",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "HTML Forms",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "HTML Comments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "What is CSS?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "CSS Selectors",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "CSS Colors",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "CSS Units",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "What is Javascript?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "Javascript Methods",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "Javascript Objects",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "Javascript Loops",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "What is JQuery?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "JQuery Events",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "JQuery Syntax",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectList: "JQuery #ID Selector",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Subjects", null, {});
  }
};
