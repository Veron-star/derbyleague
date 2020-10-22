const express = require('express');

// Controllers
const scoreCtrl = require('@controllers/score');

// App
const router = express.Router();

// => GET /score/my
// Get my score list
router.get('/my', scoreCtrl.getMyScore);

// => GET /accounts/:id
// Get single score
router.get('/:id', scoreCtrl.getSingle);

module.exports = router;