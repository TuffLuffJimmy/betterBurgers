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
// GET
router.put('/burgers/:id', (req, res) => {
  orm.updateOne('burgers', req.body, {id: req.params.id}, info => {
    res.json(info)
  })
})

// DELETE
router.delete('/burgers/:id', (req, res) => {
  orm.deleteOne('burgers', { id: req.params.id }, info => {
    res.json(info)
  })
})

// handlebars??


module.exports = router