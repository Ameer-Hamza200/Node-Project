/* eslint-disable no-console */
const models = require("../models");

const social = models.Sociallink;

module.exports = {
  async addLinks(req, res) {
    try {
      const newLinks = {
        appName: req.body.appName,
        url: req.body.url,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await social.create(newLinks).then(() => {
        res.status(200).json({
          message: "Social Links Recorded",
        });
      });
    } catch (er) {
      console.log(er);
      res.status(201).json({
        message: er,
      });
    }
  },
  // Display Social Links
  async displayLinks(req, res) {
    try {
      const data = await social.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(201).json({
        message: err,
      });
    }
  }
};
