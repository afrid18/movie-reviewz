const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send("YO! Test is working")
})

module.exports = router 
