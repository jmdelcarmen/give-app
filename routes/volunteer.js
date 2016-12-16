'use strict';

const Volunteer = require('../models/volunteer');
const q = require('q');

exports.displayVolunteerPage = (req, res) => {
  //queries
  const hospitalsQ = Volunteer.find({name: {$regex: /hospital | medical | regional hospital/, $options: 'sig'}}).exec();
  const foodbankQ = Volunteer.find({name: {$regex: /food/, $options: 'sig'}}).exec();
  const animalshelterQ = Volunteer.find({name: {$regex: /animal/, $options: 'sig'}}).exec();

  q.all([hospitalsQ, foodbankQ, animalshelterQ])
    .then( volunteer => {
      res.render('volunteer', {
        hospitals: volunteer[0],
        foodbanks: volunteer[1],
        animalshelters: volunteer[2]
        });
    })
    .catch( err => {
      res.status(500).send('Failed to load volunteers.');
    });
  }


exports.displayVolunteerItem = (req, res) => {
  //queries
  const volunteerQ = Volunteer.findById(req.params.id).exec();

  q.all([volunteerQ])
    .then( volunteer => {
      res.render('volunteer/volunteer-category', {
        volunteer: volunteer[0],
        key: process.env.MAP_KEY,
        weather_key: process.env.WEATHER_KEY
      });
    })
    .catch( err => {
      res.status(500).send('Failed to load volunteer.');
    });
  }
