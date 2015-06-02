var pageFunctions = {};

pageFunctions.getPagesBase = function (endPointUrl, id, options, callback)  {
    var callUrl = this.makeCallUrl(endPointUrl, id, options);
    this.getBase(callUrl, callback);
};
pageFunctions.getListPages = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);
    this.getPagesBase('/pages/lists', null, options, callback);
};

pageFunctions.getListPage = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);
    this.getPagesBase('/pages/lists', id, options, callback);
};

pageFunctions.getStackPages = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);
    this.getPagesBase('/pages/stack', null, options, callback);
};

pageFunctions.getStackPage = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, []);
    this.getPagesBase('/pages/stack', id, options, callback);
};

pageFunctions.getEventPages = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);
    this.getPagesBase('/pages/events', null, options, callback);
};

pageFunctions.getContestPages = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);
    this.getPagesBase('/pages/contests', null, options, callback);
};

pageFunctions.getHackerspacePages = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);
    this.getPagesBase('/pages/hackerspaces', null, options, callback);
};

module.exports = pageFunctions;
