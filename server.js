'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const engine = require('ejs-locals');
const app = express();

//Database Setup
require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.MONGO_URI || 'mongodb://localhost/givitapp';
mongoose.connect(db);

//routes
const index = require('./routes/index');
const volunteer = require('./routes/volunteer');
const donation = require('./routes/donation');

//view engine
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

////////////////APIs//////////////////
//Homepage//
app.get('/', index.displayHomePage);
app.get('/about', index.displayAboutPage);
//search
app.post('/api/search/', index.searchResults);
//Donation//
app.get('/donation', donation.displayDonationPage);
app.get('/donation/foodbank', donation.displayDonationFoodbank);
app.get('/donation/clothesandtoys', donation.displayDonationClothesAndToys);
app.get('/donation/blood', donation.displayDonationBlood);
// app.get('/donation/:category', donation.displayDonationCategory);
//Volunteer//
app.get('/volunteer', volunteer.displayVolunteerPage);
app.get('/volunteer/hospital', volunteer.displayVolunteerHospital);
app.get('/volunteer/foodbank', volunteer.displayVolunteerFoodbank);
app.get('/volunteer/animalshelter', volunteer.displayVolunteerAnimalShelter);
// app.get('/volunteer/:category', volunteer.displayVolunteerCategory);

app.listen(3000, () => {
  console.log('Construction ongoing on port 3000.');
});
