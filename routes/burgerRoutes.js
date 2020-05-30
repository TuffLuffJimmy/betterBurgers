const router = require('express').Router()
const db = require('../db')


// Burger Routes

// GET all burgers
router.get('/burgers', (req, res) => {
  console.log('GET BURGERS')
  db.query('SELECT * FROM burgers', (err, groceries) => {
    if (err) { console.log(err) }
    res.json(groceries)
  })
})

// POST a burger
router.post('/burgers', (req, res) => {
  db.query('INSERT INTO burgers SET ?', req.body, err => {
    if (err) { console.log(err)}
    res.sendStatus(200)
  })
})


module.exports = router