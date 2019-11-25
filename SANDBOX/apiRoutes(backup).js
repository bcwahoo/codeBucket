var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", async (req, res) => {
    try {
      const data = await db.Example.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new example
  app.post("/api/examples", async (req, res) => {
    try {
      const result = await db.Example.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an example by id
  app.delete("/api/examples/:id", async (req, res) => {
    try {
      const result = await db.Example.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
