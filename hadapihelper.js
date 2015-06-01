var utilityFunctions = require('./lib/utilityFunctions.js'),
    projectFunctions = require('./lib/projectFunctions.js'),
    userFunctions = require('./lib/userFunctions.js'),
    commentFunctions = require('./lib/commentFunctions.js'),
    searchFunctions = require('./lib/searchFunctions.js'),
    apiData = require('./lib/apiData.js'),
    hadApiHelper,
    apiMethods;

apiMethods = [
    apiData,
    userFunctions,
    projectFunctions,
    searchFunctions,
    commentFunctions,
    utilityFunctions
];

hadApiHelper = _.extend(apiMethods);

// for tests
hadApiHelper.setClientData({
    id: 'V8M4yVQHF9TJLu0Q3R6vutvlU4rWc64254TMslnM9sgtdBTR',
    secret: 'niD6ectpcCdvyibTrvMSv3b3NUTeieeua4rzUHlBJ7ZxBLqW',
    key: 'ZJ7YSc9fGkN4qefS'
});

if (!hadApiHelper.clientId || !hadApiHelper.clientSecret || !hadApiHelper.apiKey) {
    var missing = (!hadApiHelper.clientId && 'Client ID') || (!hadApiHelper.clientSecret && 'Client Secret') || 'API Key';
    throw new Error('Please enter: ' + missing);
}
// end for tests

module.exports = hadApiHelper;

// @TODO feeds
// @TODO pages
// @TODO oAuth
