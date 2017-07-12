Request-Promised
==========

A promised wrapper for request

[![dependencies Status](https://david-dm.org/koola/request-promised.svg)](https://david-dm.org/koola/request-promised)
[![Build Status](https://secure.travis-ci.org/koola/request-promised.svg)](http://travis-ci.org/koola/request-promised)
[![npm version](https://badge.fury.io/js/request-promised.svg)](http://badge.fury.io/js/request-promised)

## Installation

Install this module locally with the following command:
```shell
npm install request-promised
```

Save to dependencies or dev-dependencies:
```shell
npm install --save request-promised
npm install --save-dev request-promised
```

## Usage

**Example:**
```javascript
const request = require('request-promised');

request.get("http://www.example.com").then(response => {
    expect(response.statusCode).toBe(200);
});
```

## Tests

Run the tests with the following command:
```shell
npm test
```