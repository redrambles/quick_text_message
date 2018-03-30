Hiya!

This is a short node program that allows you to send a message using Twilio via the command line.

The default number that these messages are sent to is mine.

The message must be entered as part of the command line arguments using the --message or -m flag.

You can optionally change the destination number by using the --number or -n flag.

If you need help, you can use the --help or -h flag.


Examples:

node twilio.js -m "Hi there! This is my message!"

node twilio.js -n 5144973725 -m "yo yo yo baby!"