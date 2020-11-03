const Mongoose = require('mongoose');
const { Schema } = Mongoose;

// Score Schema
const ScoreSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String
  },
  
  score: {
    type: Number
  },
  
  isApproved: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: 'Waiting Approval',
    enum: ['Not Active', , 'Not Active', 'Waiting Approval', 'Rejected']
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mongoose.model('Score', ScoreSchema);