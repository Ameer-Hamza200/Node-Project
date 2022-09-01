/* eslint-disable no-console */
const models = require("../models");

const project = models.Project;
module.exports = {
  async addProjects(req, res) {
    try {
      const newProject = {
        projectsList: req.body.projectsList,
        experience: req.body.experience,
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
  }
};
