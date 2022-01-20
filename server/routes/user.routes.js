const User = require("../controllers/user.controller");
const Middleware = require("../config/jwt.config");

module.exports = (app) => {

    ///////////// Routes for users ///////////////

    app.post('/signup', User.register)
    app.post('/login', User.login)
    app.post('/logout', User.logout)
    app.get('/userid', User.getUserCookie)
    app.get('/isauth', Middleware.authenticate)
}