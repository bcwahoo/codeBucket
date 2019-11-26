"use strict";

// Topic IDS
// HTML - 1
// CSS - 2
// JavaScript - 3
// JQuery - 4
// Timers - 5

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cards", [
      {
        cardName: "What is HTML?",
        cardDef: `HTML is the standard markup language for creating Web pages.

          HTML stands for Hyper Text Markup Language
          HTML describes the structure of a Web page
          HTML consists of a series of elements
          HTML elements tell the browser how to display the content
          HTML elements are represented by tags
          HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
          Browsers do not display the HTML tags, but use them to render the content of the page
          `,
        example: `<!DOCTYPE html>
          <html>
          <head>
          <title>Page Title</title>
          </head>
          <body>
          
          <h1>This is a Heading</h1>
          <p>This is a paragraph.</p>
          
          </body>
          </html>`,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardName: "HTML Elements",
        cardDef:
          "An HTML element usually consists of a start tag and an end tag, with the content inserted in between",
        example: `<tagname>Content goes here...</tagname>
          The HTML element is everything from the start tag to the end tag:
          
          <p>My first paragraph.</p>`,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardName: "HTML Forms",
        cardDef:
          "An HTML form contains form elements. Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.",
        example: `The <input> element is the most important form element.

          The <input> element can be displayed in several ways, depending on the type attribute. 
          
          `,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardName: "HTML Comments",
        cardDef:
          "Comment tags are used to insert comments in the HTML source code.",
        example: `You can add comments to your HTML source by using the following syntax: 

          <!-- Write your comments here -->`,

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Cards", null, {});
  }
};
