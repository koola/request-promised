'use strict';

const partial = require('lodash.partial');
const request = require('request');

function promiseFunctionWrap(func, url, opts) {
    return new Promise((resolve, reject) => {
        func(url, opts, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

['get', 'patch', 'post', 'put', 'head', 'del'].forEach(fn => {
    request[fn] = partial(promiseFunctionWrap, request[fn]);
});

module.exports = request;