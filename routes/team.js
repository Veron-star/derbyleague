const express = require('express');
const Team = require('../models/Team');

const router = express.Router();

// Get index of all teams
router.get('/', function(req, res, next) {
  const { title, location, homepage } = req.query
  let conditions = {}

  if (title) { conditions.title = title }
  if (location) { conditions.location = location }
  if (homepage) { conditions.homepage = homepage }

  Team.find(conditions)
    .then(teams => {
      console.log("Initiating data..")
      res.json(teams);
    })
    .catch(err => {
      res.json(err)
    });
});

// Get only one team
router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    Team.findById(id)
      .then(teams => {
        res.json(teams);
      });
});

// Create new team
router.post('/', function(req, res, next) {
  const { title, location, homepage } = req.body;

  Team.create({
    title: title,
    location: location,
    homepage: homepage
    })
    .then(teams => {
      res.json(teams);
    })
    .catch(err => {
      res.status(400).json(err)
  });
});

// Update team from database
router.patch('/:id', function(req, res, next) {
  const id = req.params.id;
  console.log("req.params --", req.params)
  console.log("req.body --", req.body)
  const { title, location, homepage } = req.body;

  Team.findByIdAndUpdate(id)
    .then(teams => {
      console.log("before: ", teams)
      // update params that are only present
      if (title) teams.title = title;
      if (location) teams.location = location;
      if (homepage) teams.homepage = homepage;
      teams.lastUpdated = Date.now();
      teams.save()
      .then(savedTeam => {
        res.json(savedTeam)
        console.log("after: " + savedTeam)
      })
      .catch(error => {
        res.json(error)
      })
    })
    .catch(error => {
      res.json(error)
    });
});

// Delete team
router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
  Team.findByIdAndRemove(id)
    .then(teams => {
        res.json(teams);
    })
    .catch(err => {
      res.json(err)
  });
});

module.exports = router;
