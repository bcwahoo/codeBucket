"use strict";

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
        SubjectId: 1
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
        SubjectId: 1
      },
      {
        cardName: "HTML Comments",
        cardDef:
          "Comment tags are used to insert comments in the HTML source code.",
        example: `You can add comments to your HTML source by using the following syntax:
        <!-- Write your comments here -->`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 1
      },
      {
        cardName: "HTML <!--...--> Tag",
        cardDef:
          "The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers. You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.",
        example: `<!--This is a comment. Comments are not displayed in the browser-->
        <p>This is a paragraph.</p>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 2
      },
      {
        cardName: "HTML <body> Tag",
        cardDef: `The <body> tag defines the document's body.
        The <body> element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.`,
        example: `<html>
        <head>
        <title>Title of the document</title>
        </head>
        
        <body>
        The content of the document......
        </body>
        
        </html>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 2
      },
      {
        cardName: "HTML <div> Tag",
        cardDef: `The <div> tag defines a division or a section in an HTML document.
        The <div> element is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript.`,
        example: `<div style="background-color:lightblue">
        <h3>This is a heading</h3>
        <p>This is a paragraph.</p>
        </div>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 2
      },
      {
        cardName: "HTML <head> Tag",
        cardDef: `The <head> element is a container for all the head elements. The <head> element can include a title for the document, scripts, styles, meta information, and more. The following elements can go inside the <head> element:
        
        <title> (this element is required in an HTML document)
        <style>
        <base>
        <link>
        <meta>
        <script>
        <noscript>`,
        example: `<!DOCTYPE html>
        <html>
        <head>
        <title>Title of the document</title>
        </head>
        
        <body>
        The content of the document......
        </body>
        </html>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 2
      },
      {
        cardName: "What is CSS?",
        cardDef:
          "CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.",
        example:
          "CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Selectors",
        cardDef:
          "In CSS, selectors are patterns used to select the element(s) you want to style.",
        example:
          "Use our CSS Selector Tester to demonstrate the different selectors.",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Colors",
        cardDef:
          "All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors).",
        example: `With CSS, colors can be specified in different ways:

        By color names
        As RGB values
        As hexadecimal values
        As HSL values (CSS3)
        As HWB values (CSS4)`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Units",
        cardDef: "CSS has several different units for expressing a length.",
        example: `Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.
        
        Length is a number followed by a length unit, such as 10px, 2em, etc. A whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted. For some CSS properties, negative lengths are allowed.
        
        There are two types of length units: absolute and relative.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Padding",
        cardDef:
          "The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).",
        example: `div {
          padding-top: 50px;
          padding-right: 30px;
          padding-bottom: 50px;
          padding-left: 80px;
        }`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Height/Width",
        cardDef:
          "The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.",
        example:
          "The height and width properties are used to set the height and width of an element.",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 3
      },
      {
        cardName: "CSS Outline",
        cardDef:
          "An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element stand out.",
        example: `p.dotted {outline-style: dotted;}
        p.dashed {outline-style: dashed;}
        p.solid {outline-style: solid;}
        p.double {outline-style: double;}
        p.groove {outline-style: groove;}
        p.ridge {outline-style: ridge;}
        p.inset {outline-style: inset;}
        p.outset {outline-style: outset;}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 4
      },
      {
        cardName: "CSS Links",
        cardDef:
          "Links can be styled with any CSS property (e.g. color, font-family, background, etc.).",
        example: "a {color: hotpink;}",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 4
      },
      {
        cardName: "CSS - Table Borders",
        cardDef:
          "To specify table borders in CSS, use the border property. Our example specifies a black border for <table>, <th>, and <td> elements.",
        example: "table, th, td { border: 1px solid black;}",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 4
      },
      {
        cardName: "What is JavaScript?",
        cardDef:
          "JavaScript is the Programming Language for the Web JavaScript can update and change both HTML and CSS JavaScript can calculate, manipulate and validate data",
        example: `var x = 5;
        var y = 6;
        var z = x + y;`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 5
      },
      {
        cardName: "JavaScript Objects",
        cardDef:
          "Objects are variables too. But objects can contain many values.",
        example: "var car = {type:\"Fiat\", model:\"500\", color:\"white\"};",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 5
      },
      {
        cardName: "JavaScript Arrays",
        cardDef:
          "JavaScript arrays are used to store multiple values in a single variable.",
        example: "var cars = [\"Saab\", \"Volvo\", \"BMW\"];",
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 5
      },
      {
        cardName: "JavaScript Functions",
        cardDef:
          // eslint-disable-next-line prettier/prettier
          "A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when \"something\" invokes it (calls it).",
        example: `function myFunction(p1, p2) {
          return p1 * p2;    // The function returns the product of p1 and p2
        }`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 5
      },
      {
        cardName: "JavaScript if/else Statement",
        cardDef: `The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
        
        The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.
        
        In JavaScript we have the following conditional statements:
        
        Use if to specify a block of code to be executed, if a specified condition is true
        Use else to specify a block of code to be executed, if the same condition is false
        Use else if to specify a new condition to test, if the first condition is false
        Use switch to select one of many blocks of code to be executed`,
        example: `function myFunction(p1, p2) {
          return p1 * p2;    // The function returns the product of p1 and p2
        }`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 6
      },
      {
        cardName: "JavaScript for Statement",
        cardDef: `The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.
        
        JavaScript supports different kinds of loops:
        
        for - loops through a block of code a number of times
        for/in - loops through the properties of an object
        for/of - loops through the values of an iterable object
        while - loops through a block of code while a specified condition is true
        do/while - loops through a block of code once, and then repeats the loop while a specified condition is true
        
        Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.`,
        example: `var text = "";
        var i;
        for (i = 0; i < 5; i++) {
          text += "The number is " + i + "<br>";
        }`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 6
      },
      {
        cardName: "JavaScript try/catch/finally Statement",
        cardDef: `The try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code.
        
        Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.
        
        The try statement allows you to define a block of code to be tested for errors while it is being executed.
        
        The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
        
        The finally statement lets you execute code, after try and catch, regardless of the result.
        
        Note: The catch and finally statements are both optional, but you need to use one of them (if not both) while using the try statement.
        
        Tip: When an error occurs, JavaScript will normally stop, and generate an error message. Use the throw statement to create a custom error (throw an exception). If you use throw together with try and catch, you can control program flow and generate custom error messages.`,
        example: `<!DOCTYPE html>
        <html>
        <body>
        
        <p id="demo"></p>
        
        <script>
        try {
          adddlert("Welcome guest!");
        }
        catch(err) {
          document.getElementById("demo").innerHTML = err.message;
        }
        </script>
        
        </body>
        </html>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 6
      },
      {
        cardName: "JavaScript return Statement",
        cardDef:
          "The return statement stops the execution of a function and returns a value from that function.",
        example: `function myFunction() {
  return Math.PI;}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 6
      },
      {
        cardName: "What is jQuery?",
        cardDef: `jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
        
        jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
        
        The jQuery library contains the following features:
        
        HTML/DOM manipulation
        CSS manipulation
        HTML event methods
        Effects and animations
        AJAX
        Utilities`,
        example: `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>jQuery Document Ready Demo</title>
        
        <link rel="stylesheet" type="text/css" href="/examples/css/style.css">
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script>
        $(document).ready(function(){
          $("p").text("Hello World!");
        });
        </script>
        </head>
        <body>
        <p>Not loaded yet.</p>
        </body>
        </html>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 7
      },
      {
        cardName: "jQuery CDN",
        cardDef:
          "If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network). Both Google and Microsoft host jQuery.",
        example: `
        // Google CDN
        
        <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        </head>
        
        // Microsoft CDN
        
        <head>
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
        </head>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 7
      },
      {
        cardName: "jQuery Syntax",
        cardDef: `The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
        
        Basic syntax is: $(selector).action()
        
        A $ sign to define/access jQuery
        A (selector) to "query (or find)" HTML elements
        A jQuery action() to be performed on the element(s)`,
        example: `$(this).hide() - hides the current element.
        
        $("p").hide() - hides all <p> elements.
        
        $(".test").hide() - hides all elements with class="test".
        
        $("#test").hide() - hides the element with id="test".`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 7
      },
      {
        cardName: "jQuery Event Methods",
        cardDef: `The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
        
        Basic syntax is: $(selector).action()
        
        A $ sign to define/access jQuery
        A (selector) to "query (or find)" HTML elements
        A jQuery action() to be performed on the element(s)`,
        example: `
        $(this).hide() - hides the current element.
        
        $("p").hide() - hides all <p> elements.
        
        $(".test").hide() - hides all elements with class="test".
        
        $("#test").hide() - hides the element with id="test".
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 8
      },
      {
        cardName: "jQuery Callback Functions",
        cardDef: `JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.
        
        To prevent this, you can create a callback function.
        
        A callback function is executed after the current effect is finished.
        
        Typical syntax: $(selector).hide(speed,callback);`,
        example: `
        $("button").click(function(){
          $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
          });
        });
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 8
      },
      {
        cardName: "jQuery ajax() Method",
        cardDef: `The ajax() method is used to perform an AJAX (asynchronous HTTP) request.
        All jQuery AJAX methods use the ajax() method. This method is mostly used for requests where the other methods cannot be used.`,
        example: `
          $("button").click(function(){
          $.ajax({url: "demo_test.txt", success: function(result){
            $("#div1").html(result);
          }});
        });
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 8
      },
      {
        cardName: "What is Bootstrap?",
        cardDef:
          "Bootstrap is a free front-end framework for faster and easier web development. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins. Bootstrap also gives you the ability to easily create responsive designs",
        example: `<div class="jumbotron text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
        </div>
        
        <div class="container">        
        <div class="row">
        <div class="col-sm-4">        
        <h3>Column 1</h3>        
        <p>Lorem ipsum dolor..</p>
        </div>        
        <div class="col-sm-4">        
        <h3>Column 2</h3>        
        <p>Lorem ipsum dolor..</p>        
        </div>
        <div class="col-sm-4">        
        <h3>Column 3</h3>
        
        <p>Lorem ipsum dolor..</p>
        </div>
        </div>
        </div>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 9
      },
      {
        cardName: "Bootstrap 4 CDN",
        cardDef:
          "If you don't want to download and host Bootstrap 4 yourself, you can include it from a CDN (Content Delivery Network). MaxCDN provides CDN support for Bootstrap's CSS and JavaScript. You must also include jQuery:",
        example: `
        // MaxCDN
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        
        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        
        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 9
      },
      {
        cardName: "Bootstrap 4 Containers",
        cardDef: `Containers are used to pad the content inside of them, and there are two container classes available:
        
        1. The .container class provides a responsive fixed width container
        2. The .container-fluid class provides a full width container, spanning the entire width of the viewport`,
        example: `
        <div class="container">
        <h1>My First Bootstrap Page</h1>
        <p>This is some text.</p>
        </div>
        
        <div class="container-fluid">
        <h1>My First Bootstrap Page</h1>
        <p>This is some text.</p>
        </div>`,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 9
      },
      {
        cardName: "Bootstrap 4 Buttons",
        cardDef: "Bootstrap 4 provides different styles of buttons and colors.",
        example: `
        <button type="button" class="btn">Basic</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-danger">Danger</button>
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 10
      },
      {
        cardName: "Bootstrap 4 Jumbotron",
        cardDef: `A jumbotron indicates a big grey box for calling extra attention to some special content or information.
        Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
        
        Use a <div> element with class .jumbotron to create a jumbotron.`,
        example: `
        <div class="jumbotron">
          <h1>Bootstrap Tutorial</h1>
          <p>Bootstrap is the most popular HTML, CSS...</p>
        </div>
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 10
      },
      {
        cardName: "Bootstrap 4 Cards",
        cardDef:
          "A card in Bootstrap 4 is a bordered box with some padding around its content. It includes options for headers, footers, content, colors, etc.",
        example: `
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some example text. Some example text.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
        SubjectId: 10
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cards", null, {});
  }
};