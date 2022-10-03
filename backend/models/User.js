const mongoose        = require('mongoose')
const Schema          = mongoose.Schema



const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username not provided']
  },
  email: {
    type: String,
    unique: [true, 'email already exists in database!'],
    lowercase: true,
    trim: true,
    required: [true, 'email not provided'],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: 'viewer'
  },
  uploads: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now()
  }
}, {timestamp: true})


const User = mongoose.model('User', userSchema)
module.exports = User
