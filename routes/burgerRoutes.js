const router = require('express').Router()
const db = require('../config/connection.js')
const orm = require('../config/orm.js')


// Burger Routes

// GET all burgers
router.get('/burgers', (req, res) => {
  orm.selectAll('burgers', (burgers) => {
    console.log(burgers)
    res.json(burgers)
  })
})


// POST a burger
router.post('/burgers', (req, res) => {
  orm.insertOne('burgers', req.body, info => {
    res.json(info)
  })
})

router.put('/burgers', (req, res) => {
  
})



module.exports = router