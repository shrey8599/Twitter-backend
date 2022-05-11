module.exports = (sequelize, Sequelize) => {
    const Following = sequelize.define("following", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        followingId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'following'
    });
    return Following;
}