const express = require("express");
const commentController = require("../../controllers/comment.controller");

const router = express.Router();

router.get("/comment",  commentController.getAllComment);
router.get("/star", commentController.getStar);

// router.delete("comment/:id",  commentController.delete);

module.exports = router;