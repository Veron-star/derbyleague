const express = require("express");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require('morgan');

const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const User = require('./models/User');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

// Define API routes here
const auth = require("./routes/auth");
const score = require("./routes/score");
const user = require("./routes/user");
const connectDb = require("./db/mongoose");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*'
}));

// Passport + User
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// defining routes
app.use('/auth', auth);
app.use('/score', score);
app.use('/user', user);


connectDb();


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
