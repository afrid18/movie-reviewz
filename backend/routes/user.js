const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/authJWT')
const { signup, signin } = require('../controllers/auth.controller.js')


router.post("/register", signup, function(req, res) {

})


router.post('/login', signin, function(req, res) {

})


router.get('/hiddencontent', verifyToken, function(req, res) {
  if(!user) {
    res.status(403)
    .send({
      message: "Invalid JWT token"
    })
  }

  if(req.user == 'admin') {
    res.status(200)
    .send({
      message: "Unauthorised access"
    })
  }
})

module.exports = router;
