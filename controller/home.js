/* eslint-disable no-console */
const models = require("../models");

const admin = models.Admin;
const review = models.Review;
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
  // Creating profile Resume
  async create_admin(req, res) {
    try {
      const newAdmin = {
        userName: req.body.userName,
        photo: req.body.photo,
        email: req.body.email,
        password: req.body.password,
        welcomeLine: req.body.welcomeLine,
        about: req.body.about,
        jobStatus: req.body.jobStatus,
        contact: req.body.contact,
        catagories: req.body.catagories,
        projectsList: req.body.projectsList,
        recentProject: req.body.recentProject,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await admin.create(newAdmin).then(() => {
        res.status(200).json({
          message: "User Registered and Profile Created",
        });
      });
    } catch (er) {
      res.status(201).json({
        message: "there is an error",
      });
    }
  },
  // Geting Profile Data From PSQL
  async profileData(req, res) {
    try {
      const data = await admin.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(201).json({
        message: err,
      });
    }
  },
  // Updating Profile Resume
  async updateProfile(req, res) {
    const id = req.body;
    try {
      await admin.update(
        { where: { id } }
      );
      res.status(200).json({
        message: "Profile Updated",
      });
    } catch (err) {
      res.status(201).json({
        message: err,
      });
    }
  },
  // Deleting Profile Resume
  // async deleteProfile(req, res) {
  //   const { id, status } = req.body;
  //   try {
  //     await admin.destory(
  //       { status },
  //       { where: { id } }
  //     );
  //     res.status(200).json({
  //       message: "Profile Deleted",
  //     });
  //   } catch (err) {
  //     res.status(201).json({
  //       message: err,
  //     });
  //   }
  // },
  // Feedbacks or Reviews
  async feedback(req, res) {
    try {
      const newReview = {
        userName: req.body.userName,
        email: req.body.email,
        feedback: req.body.feedback,
        createdAt: new Date(),
        updatedAt: new Date(),

      };
      await review.create(newReview).then(() => {
        res.status(200).json({
          message: "Feedback Recorded",
        });
      });
    } catch (er) {
      res.status(201).json({
        message: er,
      });
    }
  },
};
