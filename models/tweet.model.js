module.exports = (sequelize, Sequelize) => {
    const Tweet = sequelize.define("tweet", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        body:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    {
        tableName: 'tweet'
    });
    return Tweet;
}