'use strict';

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayDonationPage = (req, res) => {
  res.render('volunteer');
}

exports.displayVolunteerPage = (req, res) => {
  res.render('donation');
}
