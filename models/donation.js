'use strict';

//donation model here
const mongoose = require('mongoose');

let donSchm = mongoose.Schema({
    name : String,

    category : String,

    location : {
      lat : Number,
      lng : Number
    },

    website_url : String,

    image : String,

    description : String,

    contactUs : [{
        name : String,
        title : String,
        phoneNumber : String
    }],

    address : {
        street : String,
        city : String,
        state : String,
        zip : String
    },

    hours : [{
        days : String,
        hours : String,
        day : String,
        hour : String
    }],

    open_closed: Boolean,
    
});

module.exports = mongoose.model( 'Donation' , donSchm );
