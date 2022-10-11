const express = require('express')
const router = express.Router()
const { movie } = require('../controllers/newMovie.controller.js')
const verifyToken = require('../middlewares/authJWT')


router.post('/movie', movie, function (req, res) {

})


module.exports = router
