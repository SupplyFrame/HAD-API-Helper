var utilityFunctions = require('./lib/utilityFunctions.js'),
    projectFunctions = require('./lib/projectFunctions.js'),
    feedFunctions = require('./lib/feedFunctions.js'),
    pageFunctions = require('./lib/pageFunctions.js'),
    userFunctions = require('./lib/userFunctions.js'),
    commentFunctions = require('./lib/commentFunctions.js'),
    searchFunctions = require('./lib/searchFunctions.js'),
    oAuth = require('./lib/oAuth.js'),
    _ = require('lodash'),
    hadApiHelper;

hadApiHelper = {
    apiUrl: 'https://api.hackaday.io/v1',
    clientId: null,
    clientSecret: null,
    apiKey: null,
    optionKeyHash: {
        page: '&page=',
        sortby: '&sortby=',
        perPage: '&per_page=',
        ids: '&ids=',
        searchTerm: '&search_term='
    }
};

hadApiHelper = _.extend(
                    hadApiHelper,
                    userFunctions,
                    projectFunctions,
                    searchFunctions,
                    commentFunctions,
                    utilityFunctions,
                    feedFunctions,
                    pageFunctions,
                    oAuth
);

module.exports = hadApiHelper;
