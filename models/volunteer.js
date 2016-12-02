'use strict';

//volunteer model here
const mongoose = require('mongoose');

let volSchm = mongoose.Schema({
    name: String,
    category: String,
    location: {
      lat: Number,
      lng: Number
    },
    website_url: String,
    image: String,
    description: String,
    contactUs: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    hours: String,
    open_closed: String
});

module.exports = mongoose.model( 'Volunteer' , volSchm );
