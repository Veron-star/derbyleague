const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const newsletterRoutes = require('./newsletter');
const leagueRoutes = require('./league');
const contactRoutes = require('./contact');


// auth routes
router.use('/auth', authRoutes);

// user routes
router.use('/user', userRoutes);

// newsletter routes
router.use('/newsletter', newsletterRoutes);

// product routes
router.use('/league', leagueRoutes);

// contact routes
router.use('/contact', contactRoutes);


module.exports = router;