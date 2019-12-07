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
      },
       {
        cardName: "What is JavaScript?",
        cardDef:
          "JavaScript is the programming language of HTML and the Web.",
        example: `Web pages are not the only place where JavaScript is used.
                  Many desktop and server programs use JavaScript. Node.js is the best known. 
                  Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language.`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 10
      },
       {
        cardName: "JavaScript Methods",
        cardDef:
          "JavaScript methods are actions that can be performed on objects.A JavaScript method is a property containing a function definition.",
        example: `You access an object method with the following syntax:
                   objectName.methodName()`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 11
      },
       {
        cardName: "JavaScript Objects",
        cardDef:
          "Objects in JavaScript are collections of key/value pairs. The values can consist of properties and methods, and may contain all other JavaScript data types, such as strings, numbers, and Booleans. All objects in JavaScript descend from the parent Object constructor. ... This is known as a static method.",
        example: `You define (and create) a JavaScript object with an object literal:
                  var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 12
      },
      {
        cardName: "JavaScript Loops",
        cardDef:
          "Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays.",
        example: `Instead of writing: 
                    text += cars[0] + "<br>";
                    text += cars[1] + "<br>";
                    text += cars[2] + "<br>";
                    text += cars[3] + "<br>";
                    text += cars[4] + "<br>";
                    text += cars[5] + "<br>";

                  You can write: 
                    var i;
                    for (i = 0; i < cars.length; i++) {
                    text += cars[i] + "<br>";
                     }, 
                    `,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 13
      },
      {
        cardName: "JavaScript Arrays",
        cardDef:
          "JavaScript arrays are used to store multiple values in a single variable.",
        example: `var cars = ["Saab", "Volvo", "BMW"];`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 14
      },
      {
        cardName: "JavaScript Strings",
        cardDef:
          "A JavaScript string is zero or more characters written inside quotes.",
        example: `var x = "John Doe";`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 15
      },
        {
        cardName: "JavaScript Data Types",
        cardDef:
          "JavaScript variables can hold many data types: numbers, strings, objects and more.",
        example: `var length = 16;                      // Number
        var lastName = "Johnson";                      // String
        var x = {firstName:"John", lastName:"Doe"};    // Object`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 16
      },
        {
        cardName: "JavaScript Scope",
        cardDef:
          "In JavaScript there are two types of scope: Local scope & Global scope. JavaScript has function scope: Each function creates a new scope.Scope determines the accessibility (visibility) of these variables. Variables defined inside a function are not accessible (visible) from outside the function.",
        example: `// code here can NOT use carName

                  function myFunction() {
                  var carName = "Volvo";

                  // code here CAN use carName }
                  // ____________________________________________________

                  var carName = "Volvo";

                  // code here can use carName

                  function myFunction() {

                 // code here can also use carName } `,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 17
      },
      {
        cardName: "JavaScript Numbers",
        cardDef:
          "JavaScript has only one type of number. Numbers can be written with or without decimals.",
        example: `var x = 3.14;    // A number with decimals
                   var y = 3;       // A number without decimals`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 18
      },
       {
        cardName: "What is JQuery?",
        cardDef:
          "jQuery is a JavaScript Library. jQuery greatly simplifies JavaScript programming.",
        example: `JQuery Example: 
                  $(document).ready(function(){
                  $("p").click(function(){
                  $(this).hide();
                      });
                        });`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 19
      },
      {
        cardName: "JQuery Events",
        cardDef:
          "All the different visitors' actions that a web page can respond to are called events. An event represents the precise moment when something happens.",
        example: `JQuery Examples:
                    moving a mouse over an element
                    selecting a radio button
                    clicking on an element`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 20
      },
       {
        cardName: "JQuery Syntax",
        cardDef:
          "The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).",
        example: `Basic syntax is: $(selector).action()
                  A $ sign to define/access jQuery
                  A (selector) to "query (or find)" HTML elements
                  A jQuery action() to be performed on the element(s)
                  JQuery Example:
                  $(this).hide() - hides the current element.`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 21
      },
       {
        cardName: "JQuery #id Selector",
        cardDef:
          "The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.",
        example: `An id should be unique within a page, so you should use the #id selector when you want to find a single, unique element.
                  To find an element with a specific id, write a hash character, followed by the id of the HTML element: $("#test")
`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 22
      },
      {
        cardName: "jQuery - AJAX load() Method",
        cardDef:
          "The jQuery load() method is a simple, but powerful AJAX method. The load() method loads data from a server and puts the returned data into the selected element.",
        example: `$(selector).load(URL,data,callback);
                  $("#div1").load("demo_test.txt");`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 23
      },
      {
        cardName: "JQuery Get",
        cardDef:
          "Three simple, but useful, jQuery methods for DOM manipulation are: •text() - Sets or returns the text content of selected elements •html() - Sets or returns the content of selected elements (including HTML markup)•val() - Sets or returns the value of form fields. The following example demonstrates how to get content with the jQuery text() and html() methods.",
        example: `$("#btn1").click(function(){
                   alert("Text: " + $("#test").text());
                    });
                  $("#btn2").click(function(){
                 alert("HTML: " + $("#test").html());
                  });`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 24
      },
      {
        cardName: "jQuery append() Method",
        cardDef:
          "The jQuery append() method inserts content AT THE END of the selected HTML elements.",
        example: `$("p").append("Some appended text.");`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 25
      },
      {
        cardName: "jQuery - AJAX get() and post() Methods",
        cardDef:
          "The jQuery get() and post() methods are used to request data from the server with an HTTP GET or POST request.",
        example: `Syntax: $.get(URL,callback); 
                          $("button").click(function(){
                          $.get("demo_test.asp", function(data, status){
                          alert("Data: " + data + "\nStatus: " + status);
                           });
                        });`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 26
      },
      {
        cardName: "jQuery load() Method",
        cardDef:
          "The jQuery load() method is a simple, but powerful AJAX method. The load() method loads data from a server and puts the returned data into the selected element.",
        example: `Syntax: $(selector).load(URL,data,callback);`,

        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 27
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cards", null, {});
  }
};
