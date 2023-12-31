const express = require('express')
const contoller = require('../controllers/position')
const router = express.Router ()
const passport = require('passport')


router.get('/:categoryId',passport.authenticate('jwt', {session: false}), contoller.getByCategoryId)
router.post('/', passport.authenticate('jwt', {session: false}), contoller.create)
router.patch('/:id',passport.authenticate('jwt', {session: false}),  contoller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), contoller.remove)




module.exports = router 