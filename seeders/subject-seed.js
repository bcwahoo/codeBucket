"use strict";

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Subjects", [
      {
        subjectName: "HTML Concepts",
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
        subjectName: "CSS? Concepts",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "CSS Element",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        subjectName: "Javascript Concepts",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "Javascript Elements",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        subjectName: "JQuery Concepts",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      },
      {
        subjectName: "JQuery Elements",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 4
      },
      {
        subjectName: "Bootstrap 4 Concepts",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 5
      },
      {
        subjectName: "Bootstrap 4 Elements",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 5
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Subjects", null, {});
  }
};
