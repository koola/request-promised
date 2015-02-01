var api = require('../index.js'),
    httpStatus = require('http-status-codes'),
    express = require('express'),
    app = express(),
    server;

describe("Tests", function() {

    beforeEach(function() {
        server = app.listen(8080);

        app.all('/', function(req, res){
            res.sendStatus(200);
        });

        app.get('/test', function (req, res) {
            res.status(200).send({"foo": "bar"});
        });
    });

    afterEach(function() {
        server.close();
    });

    describe("HTTP methods work as expected", function() {

        beforeEach(function() {
            app.all('/', function(req, res){
                res.sendStatus(200);
            });
        });

        it(".get should work", function(done) {
            api.get("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });

        it(".patch should work", function(done) {
            api.patch("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });

        it(".post should work", function(done) {
            api.post("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });

        it(".put should work", function(done) {
            api.put("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });

        it(".head should work", function(done) {
            api.head("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });

        it(".delete should work", function(done) {
            api.del("http://localhost:8080/").then(function(res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                done();
            });
        });
    });

    describe("HTTP method options", function() {

        beforeEach(function() {
            app.get('/test', function (req, res) {
                res.status(200).send({"foo": "bar"});
            });
        });

        it("should get json response", function (done) {
            api.get('http://localhost:8080/test', {json: true}).then(function (res) {
                expect(res.statusCode).toBe(httpStatus.OK);
                expect(res.headers['content-type']).toMatch(/json/);
                expect(res.body.foo).toBe('bar');
                done();
            }, function (err) {
                expect(err).toBeNull();
            });
        });
    });
});