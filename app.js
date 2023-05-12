var express = require('express')
var app = express()

app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/data/questions.json')
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
