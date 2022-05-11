const tweetController = require('../controllers/tweet.controller');
module.exports = function(app){
    app.post("/twitter/api/v1/tweets",[authjwt.verifyToken],tweetController.create)
}