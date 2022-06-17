const { DataTypes } = require("sequelize");

module.exports = model;
function model(sequelize) {
    const attributes = {
      content: { type: DataTypes.STRING, allowNull: false },
      star: { type: DataTypes.INT, allowNull: false },
    };
  
    const options = {
      defaultScope: {
        // exclude hash by default
        
      },
      scopes: {
        // include hash with this scope
        withHash: { attributes: {} },
      },
    };
  
    return sequelize.define("Comment", attributes, options);
  }