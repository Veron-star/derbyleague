const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  title: { type: String, required: true },
  time: String,
  location: { type: String, required: true },
  homepage: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;