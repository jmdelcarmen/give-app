'use strict';

const Donation = require('../models/donation');
const q = require('q');

exports.displayDonationPage = (req, res) => {
  //queries
  const goodwillQ = Donation.find({name: {$regex: /goodwill/, $options: 'sig'}}).exec();
  const bloodbankQ = Donation.find({name: {$regex: /blood/, $options: 'sig'}}).exec();
  const foodbankQ = Donation.find({name: {$regex: /food/, $options: 'sig'}}).exec();
  const plasmacenterQ = Donation.find({name: {$regex: /plasma/, $options: 'sig'}}).exec();

  q.all([goodwillQ, bloodbankQ, foodbankQ, plasmacenterQ])
    .then( donations => {
      res.render('donation', {
        goodwill: donations[0],
        bloodbanks: donations[1],
        foodbanks: donations[2],
        plasmacenters: donations[3]
      });
    })
    .catch( err => {
      res.status(500).send('Failed to load volunteers.');
    })
}


exports.displayDonationItem = (req, res) => {
  //queries
  const donationQ = Donation.findById(req.params.id).exec();

  q.all([donationQ])
    .then( donation => {
      res.render('donation/donation-category', {
        donation: donation[0],
        key: process.env.MAP_KEY,
        weather_key: process.env.WEATHER_KEY
      });
    })
    .catch( err => {
      res.status(500).send('Failed to load volunteer.');
    })
}
