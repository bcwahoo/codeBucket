var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", async (req, res) => {
    try {
      const dbTopic = await db.Topic.findAll({});
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

  // Load example page and pass in an example by id
  app.get("/example/:id", async (req, res) => {
    try {
      const dbExample = await db.Example.findOne({
        where: { id: req.params.id }
      });
      res.render("example", {
        example: dbExample
      });
    } catch (error) {
      res
        .status(400)
        .render("400", { error: { name: error.name, msg: error.message } });
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", async (req, res) => {
    res.render("404");
  });
};
