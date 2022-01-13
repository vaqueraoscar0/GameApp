const User = require("../controllers/user.controller");

module.exports = (app) => {

    ///////////// Routes for users ///////////////

    app.post('/signup', User.signUp)
    app.post('/login', User.login)
}