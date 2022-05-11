const userController = require('../controllers/user.controller');
module.exports = function (app){
    app.post("/twitter/api/v1/signup",userController.create);
    app.post("/twitter/api/v1/auth/signin",userController.signin);
}