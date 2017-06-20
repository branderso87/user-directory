const express = require('express')
const mustacheExpress = require('mustache-express')
const data = require('./data.js')
const app = express()
app.use(express.static(__dirname + '/public'))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', function (req, res) {
  res.render('index', {users: data.users})
})

app.get('/:id', function (req, res) {
  var id = req.params.id - 1 
  res.render('profile', {user: data.users[id]})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
