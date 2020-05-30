const db = require('../config/connection.js')

const insertOne = () => {
  db.query('INSERT INTO burgers SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
}

const updateOne = () => {
  db.query('INSERT INTO burgers SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
}

const selectAll = () => {
  db.query('SELECT * FROM burgers')
}
