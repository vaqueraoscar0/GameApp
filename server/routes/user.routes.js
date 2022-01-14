const User = require("../controllers/user.controller");

module.exports = (app) => {

    ///////////// Routes for users ///////////////

    app.post('/signup', User.register)
    app.post('/login', User.login)
    app.post('/logout', User.logout)
}