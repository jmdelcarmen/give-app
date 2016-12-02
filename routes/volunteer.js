'use strict';

const Volunteer = require('../models/volunteer');

exports.displayVolunteerPage = (req, res) => {
  Volunteer.find({}, (err, volunteers) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      res.render('volunteer', {volunteers: volunteers});
    }
  });
}

exports.displayVolunteerCategory = (req, res) => {
  let category = new RegExp(req.params.category.replace('_', ' '));
  Volunteer.find({name: {$regex: category, $options: 'wsig'}}, (err, volunteers) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      res.render('volunteer/volunteer-category', {volunteers: volunteers, key: process.env.MAP_KEY});
    }
  });
}
