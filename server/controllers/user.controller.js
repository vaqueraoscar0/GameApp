const {User} = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

// GAMES METHODS
module.exports = {

    // Create
    signUp: async (req, res) => {
        const { username, email, password, games } = req.body;
        const secret = 'gameAppTester'; // should be in the .env file

        try {
            const existingUser = await User.findOne({ email });

            if (existingUser){
                return res.status(400).json({ message: "User already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const result = await User.create({ username, email, password: hashedPassword, games});
            const token = jwt.sign( { username: result.username, id: result._id }, secret, { expiresIn: "24h" } );

            res.status(201).json({ result, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });

            console.log(error);
        }


        // const signUpUsers = new User({
        //     username:req.body.username,
        //     email:req.body.email,
        //     password:req.body.password,
        //     games:req.body.games
        // })
        // signUpUsers.save()
        //     .then(data =>{
        //         res.json(data);
        //     })
        //     .catch(err =>{
        //         res.json(err);
        //     })
    },

    login: async (req, res) => {
        const { password, username } = req.body;
        const secret = 'gameAppTester'; // should be in the .env file

        //console.log(password, username);

        try {
            const existingUser = await User.findOne({ username });

            console.log("This is the result", existingUser)

            if (!existingUser) {
                return res.status(404).json({message: "User doesn't exist"});
            }

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordCorrect) {
                return res.status(400).json({message: "Invalid credentials"});
            }

            const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, secret, { expiresIn: "24h" });

            res.status(200).json({ result: existingUser, token });
        } catch (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
}