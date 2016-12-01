'use strict';

//volunteer model here
const mongoose = require('mongoose');

let volSchm = mongoose.Schema({
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
        zip : Number
    },
    hours : [{
        days : String,
        hours : String
    }],
    open_closed: Boolean
});

module.exports = mongoose.model( 'Volunteer' , volSchm );
