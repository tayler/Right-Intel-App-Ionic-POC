### Right Intel API Mobile Client POC

A bare-bones POC using Ionic to hit the [Right Intel](https://www.rightintel.com) API.

Hitting the API requires keys (available with all Right Intel accounts). Once you get them, base64 encode the username + ":" + the password (the equivalent of this in your language of choice: `base64Encode(apiLogin + ":" + apiPassword)`). Add that to app.js line 21 (replacing `[add your base64-encoded api username + password here]`).