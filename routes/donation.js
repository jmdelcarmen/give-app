'use strict';

const Donation = require('../models/donation');
require('dotenv').config();

exports.displayDonationPage = (req, res) => {
  //hospitals
   Donation.find({name: {$regex: /goodwill/, $options: 'sig'}}, (err, goodwill) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      //foodbank
      Donation.find({name: {$regex: /blood/, $options: 'sig'}}, (err, bloodbanks) => {
       if (err) {
         res.status(500).send('Failed to load volunteers.');
       } else {
         Donation.find({name: {$regex: /foodbank/, $options: 'sig'}}, (err, foodbanks) => {
          if (err) {
            res.status(500).send('Failed to load volunteers.');
          } else {
            Donation.find({name: {$regex: /plasma/, $options: 'sig'}}, (err, plasmacenters) => {
             if (err) {
               res.status(500).send('Failed to load volunteers.');
             } else {
               res.render('donation', {goodwill: goodwill, bloodbanks: bloodbanks, foodbanks: foodbanks, plasmacenters: plasmacenters});
             }
           });
          }
        });
       }
     });
    }
  });
}


exports.displayDonationItem = (req, res) => {
  Donation.findById(req.params.id, (err, donation) => {
    res.render('donation/donation-category', {donation: donation, key: process.env.MAP_KEY, weather_key: process.env.WEATHER_KEY});
  });
}
