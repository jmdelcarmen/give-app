'use strict';

exports.displayDonationPage = (req, res) => {
  //display page
}

exports.displayDonationFoodbank = (req, res) => {
  res.render('donations/foodbank');
}

exports.displayDonationMonetary = (req, res) => {
  res.render('donations/monetary');
}

exports.displayDonationClothesAndToys = (req, res) => {
  res.render('donations/clothesandtoys');
}

exports.displayDonationBlood = (req, res) => {
  res.render('donations/blood');
}

exports.displayDonationPlasma = (req, res) => {
  res.render('donations/plasma');
}
