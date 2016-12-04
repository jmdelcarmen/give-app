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

// exports.displayDonationCategory = (req, res) => {
//   let category = new RegExp(req.params.category.replace('_', ' '));
//   Donation.find({name: {$regex: category, $options: 'wsig'}}, (err, donations) => {
exports.displayDonationFoodbank = (req, res) => {
  // var val = new RegExp('foodbank');
  Donation.find({name: {$regex: /*val*//foodbank/, $options: 'ig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      // res.render('donation/donation-category', {donations: donations, key: process.env.MAP_KEY});
      res.render('donation/foodbank', {donations: donations, key: process.env.MAP_KEY});
    }
  });
}

exports.displayDonationClothesAndToys = (req, res) => {
  Donation.find({name: {$regex: /goodwill/, $options: 'ig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donation/clothesandtoys', {donations: donations});
    }
  });
}

exports.displayDonationBlood = (req, res) => {
   Donation.find({name: {$regex: /blood/, $options: 'ig'}}, (err, donations) => {
     if (err) {
       res.status(500).send('Failed to load donations.');
     } else {
       res.render('donation/blood', {donations: donations});
    }
  });
}
