module.exports = (sequelize, Sequelize) => {
    const Follower = sequelize.define("follower", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        followerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'follower'
    });
    return Follower;
}