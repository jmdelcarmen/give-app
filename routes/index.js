'use strict';


const Volunteer = require('../models/volunteer');
const Donation = require('../models/donation');

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayAboutPage = (req, res) => {
  res.render('about');
}

// exports.searchResults = (req, res) => {
//
// }
