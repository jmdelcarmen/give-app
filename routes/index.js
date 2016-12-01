'use strict';

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayAboutPage = (req, res) => {
  res.render('about');
}

exports.displayContactPage = (req, res) => {
  res.render('contact');
}
