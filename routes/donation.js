'use strict';

const Donation = require('../models/donation');

exports.displayDonationPage = (req, res) => {
  Donation.find({}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donation', {donations: donations});
    }
  });
}

exports.displayDonationCategory = (req, res) => {
  let category = new RegExp(req.params.category.replace('_', ' '));
  Donation.find({name: {$regex: category, $options: 'wsig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donation/donation-category', {donations: donations, key: process.env.MAP_KEY});
    }
  });
}
