const Schema = require('mongoose').Schema


const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "title not provided"],
    lowercase: true
  },
  YOR: {
    type: Number,
    required: [true, 'year not provided']
  },
  language: {
    type: String
  },
  genre: {
    type: Array
  },
  uploaded_by: {
    type: ObjectId
  }
})
