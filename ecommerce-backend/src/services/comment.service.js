const config = require("../../config.json");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const jwt = require("../../_helpers/jwt");

module.exports = {
   
    getAllComment,
    getStar,
    
  };

  async function getAllComment() {
    return await db.User.findAll({
        attributes: ['content']
      });
  }
  async function getStar() {
    return await db.User.findAll({
        attributes: ['star']
      });
  }