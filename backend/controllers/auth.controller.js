const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')


exports.signup = (req, res) => {
  const user = new User({
    username : req.body.username,
    email : req.body.email,
    password : bcrypt.hashSync(req.body.password, 8)
  })

  user.save((err, user) => {
    if(err) {
      res.status(500)
        .send({
          message: err
        })
      return
    } else {
      res.status(200)
        .send({
          message: "User Registered successfully"
        })
    }
  })
}


exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if(err) {
        res.status(500)
          .send({
            message: err
          })
        return
      }
      if(!user) {
        return res.status(404)
          .send({
            message: "User not found."
          })
      }


      // password verification
      var passwordIsValid = bcrypt.compareSync (
        req.body.password,
        user.password
      )
      if (!passwordIsValid) {
        return res.status(401)
          .send({
            accessToken: null,
            message: "Invalid Password!"
          })
      }

      var token = jwt.sign({
        id: user.id
      }, process.env.API_SECRET, {
        expiresIn: 86400
      })


      res.status(200)
        .send({
          user: {
            id: user._id,
            email: user.email,
            username: user.username
          },
          message: "Login Successful",
          accessToken: token,
        })
    })
}



