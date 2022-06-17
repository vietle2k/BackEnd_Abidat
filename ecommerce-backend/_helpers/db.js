const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });
    
    // init models and add them to the exported db object
    db.User = require('../src/models/user.model')(sequelize);
    db.Role = require('../src/models/role.model')(sequelize);
    db.Product = require('../src/models/product.model')(sequelize);
    db.Category = require('../src/models/category.model')(sequelize);
    db.Comment = require('../src/models/comment.model')(sequelize);
    db.User.belongsTo(db.User, { foreignKey: "role_id", targetKey: "id" });
    db.User.belongsTo(db.User, { foreignKey: "role_id", targetKey: "id" });

    // sync all models with database
    await sequelize.sync();
}