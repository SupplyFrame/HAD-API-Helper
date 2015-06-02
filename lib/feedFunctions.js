var feedFunctions = {};

feedFunctions.getFeed = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, []);

    var callUrl = this.makeCallUrl('/feeds/global', null, options);
    this.getBase(callUrl, callback);
};

module.exports = feedFunctions;