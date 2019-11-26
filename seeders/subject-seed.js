"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {{
    return queryInterface.bulkInsert("Subjects", [
      {
        subjectName: "What is HTML?",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        subjectName: "HTML Elements",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        subjectName: "HTML Forms",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        subjectName: "HTML Comments",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        subjectName: "What is CSS?",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "CSS Selectors",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "CSS Colors",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "CSS Units",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "What is Javascript?",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "Javascript Methods",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "Javascript Objects",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "Javascript Loops",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "What is JQuery?",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      },
      {
        subjectName: "JQuery Events",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      },
      {
        subjectName: "JQuery Syntax",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      },
      {
        subjectName: "JQuery #ID Selector",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Subjects", null, {});
  }
};
