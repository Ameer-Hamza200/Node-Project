const express = require("express");
const jwt = require("jsonwebtoken");
const Auth = require("../middlewares/auth");
require("dotenv").config();

const homeController = require("../controller/home");
const categoryController = require("../controller/category");
const projectController = require("../controller/project");
const socialLink = require("../controller/socialLinks");

const router = express.Router();

router.get("/", homeController.index);
router.get("/login", (req, res) => {
  const payload = {
    name: "Hamza"
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.send(token);
});
// Create profile
router.post("/registerProfile", homeController.create_admin);
// Display profile
router.get("/profile", homeController.profileData);
// // Update profile Data
router.put("/updateProfile/:id", Auth(), homeController.updateProfile);
// // Delete Profile
router.delete("/deleteProfile/:id", Auth(), homeController.deleteProfile);
// User Feedback
router.post("/review", homeController.feedback);
// Display all reviews
router.get("/reviews", homeController.allReviews);
// Edit Review
router.put("/editReview/:id", homeController.editReview);
// Delete Review
router.delete("/deleteReview/:id", homeController.deleteReview);
// Taking Categories
router.post("/category", categoryController.category);
// Display Catagories
router.get("/categories", categoryController.categories);
// Taking Projects Details
router.post("/addProjects", projectController.addProjects);
// Display Projects
router.get("/displayProjects", projectController.displayProjects);
// Adding Social Links
router.post("/addSocialLinks", socialLink.addLinks);
// Display Links
router.get("/displayLinks", socialLink.displayLinks);
module.exports = router;
