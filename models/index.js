const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.json');
const env = process.env.NODE_ENV || "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database,
    dbSettings.username,
    dbSettings.password,
    dbSettings.dialectInformation);
const db = { Sequelize, sequelize };
db.follower = require('./follower.model')(sequelize, Sequelize);
db.following = require('./following.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.tweet = require('./tweet.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "premium_user"];
db.user.hasMany(db.tweet);
db.user.belongsToMany(db.follower,{
    through: "followers",
    foreignKey: "followerId",
    otherKey: "followingId"
});
db.user.belongsToMany(db.following,{
    through: "following",
    foreignKey: "followingId",
    otherKey: "followerId"
});
module.exports = db;