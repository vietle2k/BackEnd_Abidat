const Joi = require("joi");
const validateRequest = require("../../_middleware/validate-request");
const userService = require("../services/user.service");
const conmmentService = require("../services/comment.service");


module.exports = {
    getAllComment,
    getStar,
  };
function getAllComment(req, res, next) {
    conmmentService
      .getAllComment()
      .then((users) => res.json(users))
      .catch(next);
}
function getStar(req, res, next) {
    conmmentService
      .getStar()
      .then((users) => res.json(users))
      .catch(next);
}