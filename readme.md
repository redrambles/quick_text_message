Hiya, gorgeous! <3

This is a short node program that allows you to send a message using Twilio via the command line.

The message must be entered as part of the command line arguments using the --message or -m flag.

You can optionally change the destination number by using the --number or -n flag.

If you need help, you can use the --help or -h flag.


Examples:

node twilio.js -m "Hi there! This is my message!"

node twilio.js -n 5555555555 -m "yo yo yo baby!"

In order to receive a message, you need to create a server so that twillio can send a message back to you.

We created a quick server using express in the server.js file. Run `node server.js` and then run ngrok `ngrok http <port_number>`

Copy the ngrok address and paste it in your Twilio number configuration, under 'Messages' with '/sms' at the end. 

Send a message to your Twillio number and watch the ngrok page to see if it worked!

https://cloudup.com/cleDOwkn7m4
