const express = require("express");

// import admin router
const adminProduct = require("./admin/product.router");

// import customer router
const customerAuth = require("./customer/auth.router");

const comment = require("./admin/comment.router");

const adminUser = require("./admin/user.router");

const apiRoute = express();


// admin router
apiRoute.use("/admin/product", adminProduct);

// customer router
apiRoute.use("/customer/auth", customerAuth);

apiRoute.use("/admin/comment", comment);

apiRoute.use("/admin/user", adminUser);

module.exports = apiRoute;