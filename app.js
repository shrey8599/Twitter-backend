const db = require("./models");
const express = require('express');
const app = express();
const serverConfig = require('./config/server.config.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
function init(){
    var userData = [
        {
            email: "random123@gmail.com",
            username: "random123",
            name: "Anonymous1"
        },
        {
            email: "random000@gmail.com",
            username: "random000",
            name: "Anonymous2"
        }
    ]

    var tweetData = [
        {
            body: "Hi this is my first tweet",
            username: "random 123"
        },
        {
            body: "Hi this is my second tweet",
            username: "random000"
        }
    ]
    
    var followerData = [
        {
            id: "random123",
            followerId: "random000"
        }
    ]

    var followingData = [
        {
            id: "random000",
            followingId: "random123"
        }
    ]

    db.user.bulkCreate(userData).then(()=>{
        console.log("User table initialised");
    }).catch((err)=>{
        console.log("Error while initialising data",err);
    })

    db.tweet.bulkCreate(tweetData).then(()=>{
        console.log("tweet table initialised");
    }).catch((err)=>{
        console.log("Error while initialising data",err);
    })
    
    db.follower.bulkCreate(followerData).then(()=>{
        console.log("Follower table initialised");
    }).catch((err)=>{
        console.log("Error while initialising data",err);
    })

    db.following.bulkCreate(followingData).then(()=>{
        console.log("Following table initialised");
    }).catch((err)=>{
        console.log("Error while initialising data",err);
    })
}

db.user.hasMany(db.tweet);
db.user.hasMany(db.follower);
db.user.hasMany(db.following);

db.sequelize.sync({force:true}).then(()=>{
    console.log("Table dropped and recreated");
    init();
})

app.listen(serverConfig.PORT,()=>{
    console.log("Server started");
});