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

exports.displayDonationFoodbank = (req, res) => {
  Donation.find({name: {$regex: /foodbank/, $options: 'ig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donations/foodbank', {donations: donations});
    }
  });
}

exports.displayDonationClothesAndToys = (req, res) => {
  Donation.find({name: {$regex: /goodwill/, $options: 'ig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donations/clothesandtoys', {donations: donations});
    }
  });
}

exports.displayDonationBlood = (req, res) => {
  Donation.find({name: {$regex: /blood/, $options: 'ig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donations/blood', {donations: donations});
    }
  });
}

exports.displayDonationPlasma = (req, res) => {
  Donation.find({name: {$regex: /blood services/, $options: 'sig'}}, (err, donations) => {
    if (err) {
      res.status(500).send('Failed to load donations.');
    } else {
      res.render('donations/plasma', {donations: donations});
    }
  });
}
