Request-Promised
==========

A promised wrapper for request

[![NPM](https://nodei.co/npm/request-promised.png)](https://nodei.co/npm/request-promised/)

##Installation

Install this module locally with the following command:
```shell
npm install request-promised
```

Save to dependencies or dev-dependencies:
```shell
npm install --save request-promised
npm install --save-dev request-promised
```

##Usage

**Example:**
```javascript
var api = require('request-promised');

api.get("http://www.example.com").then(function(res) {
    expect(res.statusCode).toBe(200);
});
```

##Tests

Run the tests with the following command:
```shell
npm run test
```

###Dependencies
* [Q](https://github.com/kriskowal/q)
* [lodash](https://github.com/lodash/lodash)
* [request](https://github.com/request/request)

###Dev-Dependencies
* [express](https://github.com/strongloop/express)
* [http-status-codes](https://github.com/prettymuchbryce/node-http-status.git)
* [jasmine-node](https://github.com/mhevery/jasmine-node)

##License

The MIT License

Copyright 2015 Koola.