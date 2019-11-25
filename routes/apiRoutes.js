var db = require("../models");

module.exports = function(app) {
  // Get all topics
  app.get("/api/topics", async (req, res) => {
    try {
      const data = await db.Topic.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new topic
  app.post("/api/topics", async (req, res) => {
    try {
      const result = await db.Topic.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an topic by id
  app.delete("/api/topics/:id", async (req, res) => {
    try {
      const result = await db.Topic.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Get all subjects
  app.get("/api/subjects", async (req, res) => {
    try {
      const data = await db.Subject.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new topic
  app.post("/api/subjects", async (req, res) => {
    try {
      const result = await db.Subject.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an topic by id
  app.delete("/api/subjects/:id", async (req, res) => {
    try {
      const result = await db.Subject.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Get all cards
  app.get("/api/cards", async (req, res) => {
    try {
      const data = await db.Card.findAll({});
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new topic
  app.post("/api/cards", async (req, res) => {
    try {
      const result = await db.Card.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Delete an topic by id
  app.delete("/api/cards/:id", async (req, res) => {
    try {
      const result = await db.Card.destroy({ where: { id: req.params.id } });
      const deletedRowCount = result;
      const status = deletedRowCount > 0 ? 200 : 404;
      res.status(status).json({ deletedRowCount });
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
};
