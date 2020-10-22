require('module-alias/register');
const CONFIG = require('@config/config');

// Mongoose
require('./db/mongoose');

// Routes
const authRouter = require('@routes/auth');
const commonRouter = require('@routes/common');
const usersRouter = require('@routes/users');
const scoreRouter = require('@routes/score');
const messageRouter = require('@routes/messages');

// Others
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

// Middlewares
const auth = require('@middleware/auth');
const errorHandler = require('@middleware/error-handler');

// App
const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

// CORS
app.use(cors());

// Routes
// No auth required routes
app.use('/auth', authRouter);
app.use('/common', commonRouter);

// Verify JWT and add user data to next requests
app.use(auth);

// Auth routes
app.use('/users', usersRouter);
app.use('/score', scoreRouter);
app.use('/messages', messageRouter);

// Handle errors only in development
if (process.env.CURRENT_ENV === 'development') {
  app.use(errorHandler);
} else {
  app.use((err, req, res, next) => {
     console.error(err);
     res.status(500).send('Server Error');
  });
}

// Start the app
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*'
}));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;