const express = require('express')
const { join } = require('path')
const exphbs = require('express-handlebars')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.set('views', join(__dirname, 'views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server running on port ${PORT}...`)})
