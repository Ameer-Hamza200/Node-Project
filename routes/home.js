const express = require("express");

const homeController = require("../controller/home");
// const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/", homeController.index);
// Create profile
router.post("/registerProfile", homeController.create_admin);
// Display profile
router.get("/profile", homeController.profileData);
// // Update profile Data
router.post("/updateProfile", homeController.updateProfile);
// // Delete Profile
// router.delete("./deleteProfile", homeController.deleteProfile);
// // User Feedback
router.post("/review", homeController.feedback);

module.exports = router;
