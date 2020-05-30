const router = require('express').Router()

// Burger Routes

// GET all burgers
router.get('/burgers', (req, res) => {
  console.log('GET BURGERS')
  res.sendStatus(200)
})

// POST a burger
router.post('/burgers', (req, res) => {
  console.log('POST BURGER')
  res.sendStatus(200)
})


module.exports = router