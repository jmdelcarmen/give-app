'use strict';


const Volunteer = require('../models/volunteer');
const Donation = require('../models/donation');

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayAboutPage = (req, res) => {
  res.render('about');
}

exports.searchResults = (req, res) => {
  let q = new RegExp(req.body.searchq);
  let results = [];

  Volunteer.find({name: {$regex: q, $options: 'ig'}}, (err, volunteers) => {
    results.push(...volunteers);
    Donation.find({name: {$regex: q, $options: 'ig'}}, (err, donations) => {
      results.push(...donations);
      res.render('search-results', {data: results, q: new String(q).replace(/\//gi, '')});
    });
  });
}
