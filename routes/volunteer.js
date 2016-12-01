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

exports.displayVolunteerHospital = (req, res) => {
  Volunteer.find({name: {$regex: /hospital/, $options: 'sig'}}, (err, volunteers) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      res.render('volunteer/hospital', {volunteers: volunteers});
    }
  });
}

exports.displayVolunteerFoodbank = (req, res) => {
  Volunteer.find({name: {$regex: /food/, $options: 'sig'}}, (err, volunteers) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      res.render('volunteer/foodbank', {volunteers: volunteers});
    }
  });
}

exports.displayVolunteerAnimalShelter = (req, res) => {
  Volunteer.find({name: {$regex: /animal/, $options: 'sig'}}, (err, volunteers) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      res.render('volunteer/animalshelter', {volunteers: volunteers});
    }
  });
}
