const api = require('../index.js');
const http = require('http-status-codes');
const express = require('express');

describe("Request-promised", () => {

    let app = express();
    let server;
    let url = 'http://localhost:8080/';

    beforeEach(() => {
        server = app.listen(8080);

        app.all('/', (req, result) => {
            result.sendStatus(http.OK);
        });

        app.get('/json', (req, result) => {
            result.status(http.OK).send({"foo": "bar"});
        });
    });

    afterEach(() => server.close());

    describe("HTTP method", () => {

        beforeEach(() => {
            app.all('/', (req, result) => {
                result.sendStatus(http.OK);
            });
        });

        it(".get should work", done => {
            api.get(url).then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it(".patch should work", done => {
            api.patch(url).then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it(".post should work", done => {
            api.post(url).then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it(".put should work", done => {
            api.put(url).then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it(".head should work", done => {
            api.head(url).then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it(".delete should work", done => {
            api.del("http://localhost:8080/").then(result => {
                expect(result.statusCode).toBe(http.OK);
                done();
            });
        });

        it("should return json response", done => {
            api.get(url + 'json', {json: true}).then(result => {
                expect(result.statusCode).toBe(http.OK);
                expect(result.headers['content-type']).toMatch(/json/);
                expect(result.body.foo).toBe('bar');
                done();
            }).catch(err => {
                expect(err).toBeNull();
            });
        });
    });
});