const express = require("express");

const homeController = require("../controller/home");
// const adminController = require("../controller/adminController");

const router = express.Router();

router.get("/", homeController.index);
router.post("/register", homeController.create_admin);
router.post("/review", homeController.feedback);

module.exports = router;
