const ObjectId = require('mongodb').ObjectId;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: ObjectId,
    username: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    password: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [8, "{PATH} must be at least 8 characters"]
    },
    games: [ {type: mongoose.Schema.ObjectId, ref : 'Game'} ]
}, {timestamps: true});

module.exports.User = mongoose.model('User', UserSchema);