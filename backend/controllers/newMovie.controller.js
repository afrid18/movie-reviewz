const Movie = require('../models/Movie')


exports.movie = (req, res) => {
  const newMovie = new Movie({
    title : req.body.title,
    releaseDate : req.body.releaseDate,
    language : req.body.language,
    genre: req.body.genre,
    uploadedBy: req.body.username
  })

  newMovie.save((err, user) => {
    if(err) {
      res.status(500)
      .send({
        message: err
      })
      return
    } else {
      res.status(200)
      .send({
        message: "Movie successfully Uploaded"
      })
    }
  })
}


