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
    try {
      const { id } = req.params;
      const updatedAdmin = await admin.update(req.body, { where: { id } });
      res.status(200).json(updatedAdmin);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
  // Deleting Profile Resume
  async deleteProfile(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      await admin.destroy(
        { where: { id } }
      );
      res.status(200).json({
        message: "Profile Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(201).json({
        message: "there is err",
      });
    }
  },
  // Feedbacks or Reviews
  async feedback(req, res) {
    try {
      const newReview = {
        adminId: req.body.adminId,
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
      console.log(er);
      res.status(201).json({
        message: er,
      });
    }
  },
  // display All Reviews
  async allReviews(req, res) {
    try {
      const data = await review.findAll();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(201).json({
        message: err,
      });
    }
  },
  // Edit Review
  async editReview(req, res) {
    try {
      const { id } = req.params;
      const updateReview = await review.update(req.body, { where: { id } });
      res.status(200).json(updateReview);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
  // Delete Review
  async deleteReview(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      await admin.destroy(
        { where: { id } }
      );
      res.status(200).json({
        message: "Review Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(201).json({
        message: "there is an err",
      });
    }
  }
};
