var commentFunctions = {};

commentFunctions.getCommentsBase = function (type, id, options, callback) {
    var types = ['users', 'projects', 'logs', 'instructions', 'contests', 'events', 'hackerspaces', 'stack'];
    if (types.indexOf(type) === -1) {
       throw new Error('Invalid arguments: `type`');
    }
    var callUrl = this.makeCallUrl('/comments', type, options, id);
    this.getBase(callUrl, callback);
};

commentFunctions.getUserComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('users', id, options, callback);
};

commentFunctions.getLogComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('logs', id, options, callback);
};

commentFunctions.getInstructionComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('instructions', id, options, callback);
};

commentFunctions.getContestComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('contests', id, options, callback);
};

commentFunctions.getEventComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('events', id, options, callback);
};

commentFunctions.getHackerspaceComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('hackerspaces', id, options, callback);
};

commentFunctions.getStackComments = function (id, options, callback) {
    callback = this.verifyCallbackArgument(options, callback);

    this.verifyArguments(arguments, 2, options, []);
    this.getCommentsBase('stack', id, options, callback);
};

module.exports = commentFunctions;