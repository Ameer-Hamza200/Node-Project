/* eslint-disable no-console */
const models = require("../models");
const Project = require("../models/Project");

const project = models.Project;
module.exports = {
  async addProjects(req, res) {
    try {
      const newProject = {
        categoryId: req.body.categoryId,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        url: req.body.url,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await project.create(newProject).then(() => {
        res.status(200).json({
          message: "Project Details Recorded",
        });
      });
    } catch (er) {
      console.log(er);
      res.status(201).json({
        message: er,
      });
    }
  },
  // Display projects
  async displayProjects(req, res) {
    try {
      const data = await Project.findAll({
        include: {
          models: "Project"
        }
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(201).json({
        message: err,
      });
    }
  }
};
