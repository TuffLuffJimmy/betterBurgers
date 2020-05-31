require('dotenv').config()
const db = require('./connection')


const orm = {

  selectAll (table, cb) {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err)}
      cb(data)
    })
  },

  insertOne(table, data, cb) {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },

  updateOne(table,changes, where, cb) {
    db.query(`UPDATE ${table} SET ? WHERE ?`, [changes, where], (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },

  deleteOne(table, where, cb) {
    db.query(`DELETE FROM ${table} WHERE ?`, where, (err, info) => {
      if (err){ console.log(err) }
      cb(info)
    })
  }
  
}

module.exports = orm