const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.BIGINT, allowNull: false },
    imageBg: { type: DataTypes.STRING, allowNull: false },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("imgs").split(";");
      },
      set(val) {
        this.setDataValue("imgs", val.join(";"));
      },
    },
    desc: { type: DataTypes.STRING, allowNull: false },
    total: { type: DataTypes.BIGINT, allowNull: false },
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

  return sequelize.define("Product", attributes, options);
}
