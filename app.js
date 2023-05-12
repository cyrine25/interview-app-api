var express = require('express')
var cors = require('cors')
var app = express()
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/data/questions.json')
})

app.listen(5000, err =>
  err ? console.error(err) : console.log(`server is running on port 5000`)
)
