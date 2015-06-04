var request = require('request'),
    async = require('async'),
    oAuth = {};

oAuth._setAuthToken = function (token) {
    this.authToken = token;
};

oAuth.getAuthToken = function () {
    return this.authToken;
};

oAuth._setCode = function (code) {
    this.code = code;
};

oAuth.getCode = function () {
    return this.code;
};

oAuth.redirect = function (req, res) {
    var clientData = this._getClientData(),
        urlBase = 'https://hackaday.io/authorize?client_id=' + clientData.id + '&response_type=code';
    res.redirect(urlBase);
};

oAuth.callback = function (req, res, callback) {
    var self = this,
        clientData = this._getClientData(),
        code = req.query.code;
    self._setCode(code);

    async.waterfall([
        // POST code
        function (innerCallback) {
            var postUrl = 'https://auth.hackaday.io/access_token?' +
                'client_id=' + clientData.id +
                '&client_secret=' + clientData.secret +
                '&code=' + code +
                '&grant_type=authorization_code';
            request.post(postUrl, innerCallback);
        },
        // Receive Token
        function (tokenResponse, tokenBody, innerCallback) {
            var parsed = parseJSON(tokenBody),
                token = parsed && parsed.access_token;
            self._setAuthToken(token);
            request.get({
                url: 'https://api.hackaday.io/v1/me' + self.getApiKeyAsParam(),
                headers: { Authorization: 'token ' + token }
            }, innerCallback);
        }
    ], function (err, response, responseBody) {
        callback(err, responseBody);
    });
};

function parseJSON (val) {
    var result = false;
    try {
        result = JSON.parse(val);
    } catch (e) {}
    return result;
}

module.exports = oAuth;