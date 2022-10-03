const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config();

const userRoutes = require('./routes/user')


// Using middlewares from express
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// thirdparty middle wares
app.use(morgan('dev'))

// Login, Register routes
app.use(userRoutes);



// Testing if alive or dead
app.get('/', (req, res) => {
  res.send("Yo! Hello world");
})


const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/movie-reviewz';
const PORT = process.env.PORT || 1234;


mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch(error => console.log(error));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

