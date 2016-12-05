'use strict';

const Volunteer = require('../models/volunteer');

exports.displayVolunteerPage = (req, res) => {
  //hospitals
   Volunteer.find({name: {$regex: /hospital/, $options: 'sig'}}, (err, hospitals) => {
    if (err) {
      res.status(500).send('Failed to load volunteers.');
    } else {
      //foodbank
      Volunteer.find({name: {$regex: /food/, $options: 'sig'}}, (err, foodbanks) => {
       if (err) {
         res.status(500).send('Failed to load volunteers.');
       } else {
         Volunteer.find({name: {$regex: /animal/, $options: 'sig'}}, (err, animalshelters) => {
          if (err) {
            res.status(500).send('Failed to load volunteers.');
          } else {
            res.render('volunteer', {hospitals: hospitals, foodbanks: foodbanks, animalshelters: animalshelters});
          }
        });
       }
     });
    }
  });
}

exports.displayVolunteerItem = (req, res) => {
  Volunteer.findById(req.params.id, (err, volunteer) => {
    console.log(volunteer);
  });
}
