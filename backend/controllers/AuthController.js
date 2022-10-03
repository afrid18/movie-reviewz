const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = (req, res, next) => {
  console.log("inside register")
  bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
    if(err) {
      res.json({
        error: err
      })
    }

    console.log("No error till here")

    let user = new User ({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass
    })

    user.save()
    .then(user => {
      res.json({
        message: "User Registration Successful!"
      })
    })
    .catch(err => {
      res.json({message: "An error occured while registering!"})
    })

  })
}


const login = (req, res, next) => {
  var name= req.body.name
  var password = req.body.password

  User.findOne({name : name})
  .then(user => {
    if(user){
      bcrypt.compare(password, user.password, function(err, result) {
        if(err) {
          res.json({error: err})
        }
        if(result) {
          let token = jwt.sign({name: user.name}, 'verySecretValue', {expriesIn: '1h'})
          res.json({
            message: 'Login Successful!',
            token
          })
        } else {
          res.json({
            message: 'Password did not match'
          })
        }
      })
    }else {
      res.json({message: "No user found!"})
    }
  })
}

module.exports = {
  register,
  login
}


