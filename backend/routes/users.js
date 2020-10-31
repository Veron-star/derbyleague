const express = require("express");
const User = require('../backend/models/User');
const parseErrors = require('../util/parseErrors');
const { sendConfirmationEmail } = require('../mailer');

const router = express.Router();

router.post("/", (req, res) => 
{ const { email, password } = req.body.user;
  const user = new User({ email });
  user.setPassword(password);
  user.setConfirmationToken();  //----------for confirmation email
  user.save()
     .then(userRecord => {  sendConfirmationEmail(userRecord); res.json({ user: userRecord.toAuthJSON() }) ;  })
     .catch(err=>res.status(400).json({ errors: parseErrors(err.errors) }));
});



module.exports = router;
