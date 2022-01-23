const Forum = require("../controllers/forum.controller");

module.exports = (app) => {

    // Create
    app.post('/forum/new', Forum.create);
    // Read all
    app.get('/forums', Forum.findAll);
    // Read one
    app.get('/forum/:id', Forum.getAllForumData);
    // Update
    app.put('/update/:id', Forum.update);
    // Delete
    app.delete('/delete/:id', Forum.delete);
}