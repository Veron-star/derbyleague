const express = require("express");
const connectDB = require('./database/connect')
// const apiRoutes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
// const favicon = require('serve-favicon');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// const passportJWT = require('passport-jwt');
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
const team = require("./routes/team");
const user = require("./routes/user");
const connectDb = require("./database/connect");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

// Passport + JWT
// passport.use(new passportJWT.Strategy(
//   {
//     jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
//     secretOrKey: process.env.TOKEN_SECRET
//   },
//   (payload, done) => {
//     /*done(null, {
//       _id: payload.sub
//     })*/
//     User.findById(payload.sub, done);
//   }
// ));

// Express + Passport
// app.use(passport.initialize());

// defining routes
app.use('/auth', auth);
app.use('/team', team);
app.use('/user', user);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
// });
connectDb();


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
