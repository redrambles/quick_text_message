const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
// Remember to go check the read me
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  if ( (req.body.Body == ('hello')) || (req.body.Body == ('Hello')) ) {
    twiml.message('Hi!');
  } else if ( (req.body.Body == 'bye') || (req.body.Body == 'Bye') ) {
    twiml.message('Goodbye');
  } else {
    twiml.message('It\'s the apocalypse! Go to the shelter!');
  }

  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
