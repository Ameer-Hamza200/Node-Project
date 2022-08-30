const models = require("../models");

const admin = models.Admin;
module.exports = {
  async index(req, res) {
    try {
      res.json({
        status: true,
        message: "Operation completed successfully.",
        data: [],
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
  async create_admin(req, res) {
    try {
      const admin = await Admin.create({
        // id: 1,
        // userName: "Hamza",
        // photo: "img",
        // email: "hamza@test.com",
        // password: "123456",
        // welcomeLine: "This is welcome",
        // about: "this is about section",
        // jobStatus: "Mean/Mern",
        // contact: "0300000009",
        // catagories: "project-1 , project-2",
        // projectList: "option 1 , option 2,option 3",
        // recentProject: "Mern project",
        // createdAt: new Date(),
        // updatedAt: new Date(),
        id: req.body.id,
        userName: req.body.userName,
        photo: req.body.photo,
        email: req.body.email,
        password: req.body.password,
        welcomeLine: req.body.welcomeLine,
        about: req.body.about,
        jobStatus: req.body.jobStatus,
        contact: req.body.contact,
        catagories: req.body.catagories,
        projectList: req.body.projectList,
        recentProject: req.body.recentProject,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res.status(200).json({
        message: "User Registered and Profile Created",
      });
    } catch (err) {
      if (err.name === "SequelizeValidationError") {
        return res.status(400).json({
          error: err.errors.map((e) => e.message),
        });
      }
      res.status(400).json({
        message: err.message,
      });
    }
  },
  async feedback(req, res) {
    try {
      res.send(req.body);
    } catch (er) {
      // eslint-disable-next-line no-console
      console.log("THere is an error");
    }
  }
};
