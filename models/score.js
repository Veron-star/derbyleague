const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema(
   {
      type: {
         type: String,
         required: true
      },
      owner: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User'
      },
      isActive: {
         type: Boolean,
         default: true
      },
      sortcode: {
         type: Number,
         required: true,
         minlength: 6,
         maxlength: 6
      },
      number: {
         type: Number,
         required: true,
         minlength: 8,
         maxlength: 8
      },
   },
   {
      timestamps: true
   }
);

const Account = mongoose.model('Score', scoreSchema);

module.exports = Account;