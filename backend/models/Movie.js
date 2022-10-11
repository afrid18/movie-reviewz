const mongoose = require('mongoose'),
  Schema = mongoose.Schema


const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "title not provided"],
    lowercase: true
  },
  releaseDate : {
    type: Date,
    required: [true, 'year not provided'],
    validate: {
      validator: function(v) {
        let date = new Date()
        return v.getTime() <= date.getTime()
      },
      message: 'Movie is not released yet!'
    },
    default: new Date()
  },
  language: {
    type: String
  },
  genre: {
    type: Array
  },
  uploaded_by: {
    type: String
  }
}, { timestamp: true })


module.exports = mongoose.model('Movie', movieSchema)
