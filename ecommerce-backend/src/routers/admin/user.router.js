const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();

router.get("/",  userController.getAll);
router.get("/current",  userController.getCurrent);
router.get("/:id",  userController.getById);
router.put("/:id",  userController.updateSchema, userController.update);
router.delete("/:id",  userController._delete);

module.export = router;

// authorize.authorize(),
// authorize.authorize(),
// authorize.authorize(),
// authorize.authorize(),
// authorize.authorize(),