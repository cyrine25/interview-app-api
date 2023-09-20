var express = require('express')
var cors = require('cors')
var app = express()
const tracksData = require('./data/tracks.json');
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.get('/questions', (req, res) => {
  res.sendFile(__dirname + '/data/questions.json')
})

app.get('/greetings', (req, res) => {
  const { firstname } = req.query;
  const message = `Bonjour, ${firstname} !` ;
  console.log(typeof(message))
const response={message:message}
 

  res.json(response);
});
app.get('/tracks', (req, res) => {
   res.sendFile(__dirname + '/data/tracks.json')
});

app.listen(5000, err =>
  err ? console.error(err) : console.log(`server is running on port 5000`)
)
