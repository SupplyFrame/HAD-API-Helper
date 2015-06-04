var _ = require('lodash'),
    request = require('request'),
    utilityFunctions = {};

utilityFunctions.verifyCallbackArgument = function (options, callback) {
    return (typeof options === 'function') ? options : callback;
};

utilityFunctions.getApiUrl = function (obj) {
    return this.apiUrl;
};

utilityFunctions.getBase = function (endpointUrl, callback) {
    request.get(endpointUrl, function (err, res, body) {
        callback(err, body);
    });
};

utilityFunctions.setClientData = function (obj) {
    this.clientId = obj.id;
    this.clientSecret = obj.secret;
    this.apiKey = obj.key;
};

utilityFunctions._getClientData = function () {
    return {
        id: this.clientId,
        secret: this.clientSecret,
        key: this.apiKey
    };
};

utilityFunctions.getApiKeyAsParam = function () {
    return '?api_key=' + this.apiKey;
};

utilityFunctions.verifyApplicationData = function () {
    if (!this.clientId || !this.clientSecret || !this.apiKey) {
        var missing = (!this.clientId && 'Client ID') || (!this.clientSecret && 'Client Secret') || 'API Key';
        throw new Error('Please enter: ' + missing);
    }
};

utilityFunctions.makeCallUrl = function (endpoint, id, options, additionalNouns) {

    this.verifyApplicationData();

    var callUrl = this.apiUrl  + endpoint;

    if (id) {
        callUrl += '/' + id;
    }

    if (additionalNouns) {
        callUrl += '/' + additionalNouns;
    }

    callUrl +=  this.getApiKeyAsParam();

    if (!options || typeof options !== 'object') {
        return callUrl;
    }

    _.forOwn(options, function(val, key) {
        if (this.optionKeyHash[key]) {
            if (key === 'ids') {
                val = val.join();
            }
            callUrl += (this.optionKeyHash[key] + val);
        }
    }, this);
    console.log(callUrl);
    return callUrl;
};

utilityFunctions.validOptions = function (options, allowedParams) {
    var valid = true;
    allowedParams.push('page', 'perPage');
    _.forIn(options, function (value, option) {
        if (allowedParams.indexOf(option) === -1) {
            valid = false;
            return false;
        }
    });
    return valid;
};

utilityFunctions.verifyArguments = function (args, argsThreshold, options, allowedParams) {
    if (args.length < argsThreshold) {
        throw new Error('Invalid arguments');
    }
    if (typeof options === 'object' && !this.validOptions(options, allowedParams)) {
        throw new Error('Invalid parameter options');
    }
};
module.exports = utilityFunctions;