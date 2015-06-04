var hadApi = require('../hadapihelper.js'),
    superagent = require('superagent'),
    expect = require('chai').expect,
    utils = {};

utils.compareResponses =  function (directResponseBody, hadApiHelperResponseBody) {
    var directResponseObj, hadApiHelperResponseObj;

    directResponseObj = (typeof directResponseBody === 'string')
        ? JSON.parse(directResponseBody)
        : directResponseBody;

    hadApiHelperResponseObj = (typeof hadApiHelperResponseBody === 'string')
        ? JSON.parse(hadApiHelperResponseBody)
        : hadApiHelperResponseBody;

    expect(directResponseObj).to.deep.equal(hadApiHelperResponseObj, 'Responses are identical to raw query.');
};


utils.compareCalls = function (rawQuery, hadApiFunc, hadApiFuncArgs, done) {
    hadApiFuncArgs = hadApiFuncArgs || [];

    if (!Array.isArray(hadApiFuncArgs)) {
        hadApiFuncArgs = [hadApiFuncArgs];
    }

    superagent
        .get(rawQuery)
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);

            var cb = function (error, responseData) {
                expect(error).to.be.null;
                utils.compareResponses(res.body, responseData);
                done();
            };
            hadApiFuncArgs.push(cb);
            hadApiFunc.apply(hadApi, hadApiFuncArgs);
        });
};

module.exports = utils;