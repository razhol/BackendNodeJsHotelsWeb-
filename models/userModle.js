const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    password : String
});

module.exports = mongoose.model('UsersHotels',UserSchema );