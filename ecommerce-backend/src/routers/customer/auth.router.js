const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router.post(
  "/authenticate",
  userController.authenticateSchema,
  userController.authenticate
);
router.post(
  "/register",
  userController.registerSchema,
  userController.register
);
router.get("/verifiedMail/:token", userController.verifiedMail);

module.exports = router;
