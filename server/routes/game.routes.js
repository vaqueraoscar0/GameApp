const Game = require("../controllers/game.controller");

module.exports = (app) => {
    // Create
    app.post('/new', Game.create)
    app.get('/games', Game.GameList)
}