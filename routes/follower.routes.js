const followerController = require('../controllers/follower.controller');
module.exports = function(app){
    app.post("/twitter/api/v1/follower",[authjwt.verifyToken],followerController.create)

    app.delete("/twitter/api/v1/follower/:id",[authjwt.verifyToken],followerController.delete)

}