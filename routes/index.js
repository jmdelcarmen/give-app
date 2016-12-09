'use strict';

const Volunteer = require('../models/volunteer');
const Donation = require('../models/donation');
const q = require('q');

exports.displayHomePage = (req, res) => {
  res.render('index');
}

exports.displayAboutPage = (req, res) => {
  res.render('about');
}

exports.searchResults = (req, res) => {
  const query = new RegExp(req.body.searchq);
  const results = [];

  //queries
  const volunteersQ = Volunteer.find({name: {$regex: query, $options: 'ig'}}).exec();
  const donationsQ = Donation.find({name: {$regex: query, $options: 'ig'}}).exec();

  q.all([volunteersQ, donationsQ])
    .then( data => {
      results.push(...data[0]);
      results.push(...data[1]);
      res.render('search-results', {
        data: results,
        q: new String(query).replace(/\//gi, '')
      });
    })
    .catch( err => {
      res.status(500).send('Something went wrong.');
    });
  }
