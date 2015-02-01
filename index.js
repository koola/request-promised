'use strict';

var Q = require('q'),
    _ = require('lodash'),
    request = require('request');

function promiseFunctionWrap(func, url, opts) {
  return Q.Promise(function(resolve, reject) {
    func(url, opts, function(err, res) {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

['get', 'patch', 'post', 'put', 'head', 'del'].forEach(function(fn){
  request[fn] = _.partial(promiseFunctionWrap, request[fn]);
});

module.exports = request;
