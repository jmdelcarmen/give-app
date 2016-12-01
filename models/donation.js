'use strict';

//donation model here
const mongoose = require('mongoose');

let donSchm = mongoose.Schema({
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

module.exports = mongoose.model( 'Donation' , donSchm );
