const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  homepage: { type: String, required: true },
  timestamps: true,
}), 

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;