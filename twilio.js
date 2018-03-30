const config = require('./config');
const yargs = require('yargs');

const argv = yargs
  .options({
    n: {
      demand: false,
      alias: 'number',
      describe: 'Number to send text to',
      string: true,
      default: config.myNumber
    },
    m: {
      demand: true,
      alias: 'message',
      describe: 'Message you would like to send',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var recipientNumber = argv.number;
var sentMessage = argv.message;

// Twilio Credentials
const accountSid = config.account_sid;
const authToken = config.authToken;
const myTwilioNumber = config.myTwilioNumber;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: `+1${recipientNumber}`,
    from: myTwilioNumber,
    body: sentMessage,
  },
  (err, message) => {
    if (err) {
      console.log('something went wrong');
      console.log(err);
    } else {
      console.log('Message sent!');
      console.log(`Message: ${sentMessage} sent to ${recipientNumber}`);
    }
  }
);