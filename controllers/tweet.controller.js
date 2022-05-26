const { user } = require('../models');
const db = require('../models');
const Tweet = db.tweet;
const followingController = require('../controllers/following.controller');

exports.create = (req, res) => {
    const tweet = {
        body: req.body.body,
        username: req.body.username
    }
    Tweet.create(tweet).then(response => {
        console.log(`tweet: [${response} got inserted in db]`);
        res.status(201).send(response);
    }).catch(err => {
        console.log(`tweet: [${err} not inserted in db]`);
        res.status(500).send({
            message: "Some internal error occured while storing the tweet data"
        })
    })
}

exports.findAll = (req, res) => {
    let tweetBody = req.query.body;
    let promise;
    if(tweetBody){
        promise = Tweet.findAll({
            where: {
                body: tweetBody
            }
        })
    }
    else{
        promise = Tweet.findAll();
    }
    promise.then(response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send({
            message: "Some internal error occured while fetching all the tweets"
        })
    })
}
exports.getFeedOfUser = (req, res) => {
    const userID = req.params.userId;
    const limitValue = req.query.limit || 10;
    const skipValue = req.query.skip || 0;
        const tweets = await Tweet.findAll({where: {
            id: followingController.getFollowingsOfUser
        }
    }).sort({date: 'desc'}).limit(limitValue).skip(skipValue);
    //const users = await user.find({});
}
