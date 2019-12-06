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
        updatedAt: new Date(),
        SubjectId: 1
      },
      {
        cardName: "HTML Elements",
        cardDef:
          "An HTML element usually consists of a start tag and an end tag, with the content inserted in between",
        example: `<tagname>Content goes here...</tagname>
          The HTML element is everything from the start tag to the end tag:
          
          <p>My first paragraph.</p>`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 2
      },
      {
        cardName: "HTML Forms",
        cardDef:
          "An HTML form contains form elements. Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more.",
        example: `The <input> element is the most important form element.
          The <input> element can be displayed in several ways, depending on the type attribute. 
          `,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "HTML Comments",
        cardDef:
          "Comment tags are used to insert comments in the HTML source code.",
        example: `You can add comments to your HTML source by using the following syntax: 

          <!-- Write your comments here -->`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 4
      },
        {
        cardName: "HTML Table",
        cardDef:
          "An HTML table is defined with the <table> tag. Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.",
        example: `<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 5
      },
      {
        cardName: "HTML Attributes",
        cardDef:
          "HTML images also have width and height attributes, which specifies the width and height of the image:",
        example: `<img src="img_girl.jpg" width="500" height="600">`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 6
      },
      {
        cardName: "HTML Paragraphs",
        cardDef:
          "The HTML <p> element defines a paragraph:",
        example: `<p>This is a paragraph.</p>
                  <p>This is another paragraph.</p>`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 7
      },
      {
        cardName: "HTML Unordered List",
        cardDef:
          "An unordered list starts with the <ul> tag. Each list item starts with the <li> tag. The list items will be marked with bullets (small black circles) by default.",
        example: `<ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                  </ul>`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 8
      },
      {
        cardName: "HTML Ordered List",
        cardDef:
          "An unordered list starts with the <ol> tag. Each list item starts with the <li> tag. The list items will be marked with numbers by default.",
        example: `<ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                  </ol>`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 9
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cards", null, {});
  }
};
