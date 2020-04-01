const router = require('express').Router();

const exerciseRoutes = require('./exercise-routes');
const statsRoutes = require('./stats-routes');
const workoutRoutes = require('./workout-routes');

router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;
