'use strict';

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayAboutPage = (req, res) => {
  res.render('about');
}
