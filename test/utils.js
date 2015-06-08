var hadApi = require('../hadapihelper.js'),
    superagent = require('superagent'),
    expect = require('chai').expect,
    _ = require('lodash'),
    utils = {};

utils.compareResponses =  function (directResponseBody, hadApiHelperResponseBody) {
    var directResponseObj, hadApiHelperResponseObj;

    directResponseObj = (typeof directResponseBody === 'string')
        ? JSON.parse(directResponseBody)
        : directResponseBody;

    hadApiHelperResponseObj = (typeof hadApiHelperResponseBody === 'string')
        ? JSON.parse(hadApiHelperResponseBody)
        : hadApiHelperResponseBody;

    directResponseObj = _recursiveSort(directResponseObj);
    hadApiHelperResponseObj = _recursiveSort(hadApiHelperResponseObj);

    expect(directResponseObj).to.eql(hadApiHelperResponseObj, 'Responses are identical to raw query.');
};


utils.compareCalls = function (rawQuery, hadApiFunc, hadApiFuncArgs, done) {
    hadApiFuncArgs = hadApiFuncArgs || [];

    var delay = 250; //ms

    if (!Array.isArray(hadApiFuncArgs)) {
        hadApiFuncArgs = [hadApiFuncArgs];
    }

    function normalApiCall () {
        superagent
            .get(rawQuery)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res.status).to.eql(200);

                var cb = function (error, responseData) {
                    expect(error).to.be.null;
                    utils.compareResponses(res.body, responseData);
                    done();
                };
                hadApiFuncArgs.push(cb);

                var delayed = function () {
                    hadApiFunc.apply(hadApi, hadApiFuncArgs);
                };

                setTimeout(delayed, delay);
            });
    }

    setTimeout(normalApiCall, delay);
};

module.exports = utils;

function _recursiveSort (item) {
    if (!_.isArray(item) && !_.isObject(item)) {
        return item;
    } else if (_.isArray(item)) {
        return _.map(item.sort(), function (val) {
            return _recursiveSort(val);
        });
    } else {
        var clone = item;
        _.forIn(clone, function (val, key) {
            clone[key] = _recursiveSort(val);
        });
        return clone;
    }
}

