const express = require('express')
const passport = require('passport')

const controller = require('../controllers/stats')

const router = express.Router()


router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview)

router.get('/analytics', passport.authenticate('jwt', {session: false}), controller.analytics)


module.exports = router