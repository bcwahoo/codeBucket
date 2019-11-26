var db = require("../models");

module.exports = function(app) {
  // Load index page / Query should get a list of ALL TOPICS;
  // 1st LEVEL PAGE / Getting info from "TOPICS" Table

  app.get("/", async (req, res) => {
    try {
      const dbTopic = await db.Topic.findAll({});

      //Pulls/Renders object within the index.handlebars file to display in the browser

      res.render("index", {
        msg: "Welcome To codeBucket!",
        topic: dbTopic
      });
    } catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
    }
  });

  // _______________________________________________________________________________

  // 2nd LEVEL PAGE / Getting info from "SUBJECT" Table
  // Load page with ALL SUBJECTS that are WITHIN the selected TOPIC

  // * Check FILTER: TopicId using the file: ../seeders/###subject-id.js *
  // i.e. "/subject/ENTER NUMBER HERE" : "/subject/1 " OR "/subject/2 "

  app.get("/subject/:topicid", function(req, res) {
    db.Subject.findAll({ where: { topicid: req.params.topicid } }).then(
      function(dbSubject) {
        //Pulls/Renders object within the subject.handlebars file to display in the browser

        res.render("/subject", {
          subject: dbSubject
        });
      }
    );
  });

  // _______________________________________________________________________________

  // 3rd LEVEL PAGE / Getting info from "CARD" Table
  // ENDPOINT! Load page with SELECTED CARD from PREVIOUS page: Topic/Subjects.

  // * Check FILTER: SubjectId using the file: ../seeders/###card-seed.js *
  // i.e. "/card/ENTER NUMBER HERE" : "/card/1 " OR "/card/2 "

  app.get("/card/:subjectid", function(req, res) {
    db.Card.findAll({ where: { subjectid: req.params.subjectid } }).then(
      function(dbCard) {
        //Pulls/Renders object within the card.handlebars file to display in the browser

        res.render("layouts/card", {
          card: dbCard
        });
      }
    );
  });

  // _______________________________________________________________________________

  // Render 404 page for any unmatched routes

  app.get("*", async (req, res) => {
    res.render("404");
  });
};
