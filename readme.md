This is project to create a chatbot to mimic our coworker Will while he is out on paternity leave.

**Plan:**
* Query the Slack API for #chalice messages (channel === 'G8SNJM07L')
* Filter by user = will (user === 'U0E5PKHL6')
* Filter out multimedia messages                                       **Progress is here so far**
* Write the text of Will's messages into a .txt file
* Run it through a Markov chain to generate Will...ish sentences
* Create a bot that will  post Will...ish messages to #chalice channel
  * { periodically? listen for certain keywords? }

**Contribute**
* Fork this project
* Get a token from https://api.slack.com/custom-integrations/legacy-tokens
* create a file `tmp/slack_secret.js` with the following format:

```javascript
const token = 'YOUR_SLACK_TOKEN_HERE';
module.exports = { token };
```