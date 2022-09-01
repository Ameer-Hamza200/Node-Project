/* eslint-disable no-console */
const models = require("../models");

const category = models.Category;
module.exports = {
  async category(req, res) {
    try {
      const newCatagory = {
        stack: req.body.stack,
        description: req.body.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await category.create(newCatagory).then(() => {
        res.status(200).json({
          message: "Categories Recorded",
        });
      });
    } catch (er) {
      console.log(er);
      res.status(201).json({
        message: er,
      });
    }
  },
  // Display Category
  async categories(req, res) {
    try {
      const data = await category.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(201).json({
        message: err,
      });
    }
  }
};
