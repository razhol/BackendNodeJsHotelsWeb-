const mongoose = require('mongoose');

let HotelSchema = new mongoose.Schema({
    hotelName : String,
    checkin : Date,
    checkout : Date,
    price : String,
    numberOfGuests: Number,
    roomcount : [{
        RomeName : String,
        count : Number
         }],
    fname:String,
    lname:String,
    email:String     
});

module.exports = mongoose.model('hotels',HotelSchema );