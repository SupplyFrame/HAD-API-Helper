var userFunctions = {};

userFunctions.getUsers = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', null, options);
    this.getBase(callUrl, callback);
};

userFunctions.getUser = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, []);

    var callUrl = this.makeCallUrl('/users', id, options);
    this.getBase(callUrl, callback);
};

userFunctions.getUserFollowing = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'following');
    this.getBase(callUrl, callback);
};

userFunctions.getUserFollowers = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'followers');
    this.getBase(callUrl, callback);
};

userFunctions.getUserSkulls = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'skulls');
    this.getBase(callUrl, callback);
};

userFunctions.getUserPages = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'pages');
    this.getBase(callUrl, callback);
};

userFunctions.getUserTags = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'tags');
    this.getBase(callUrl, callback);
};

userFunctions.getUserLinks = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'links');
    this.getBase(callUrl, callback);
};

userFunctions.getUsersRange = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/users', null, options, 'range');
    this.getBase(callUrl, callback);
};

userFunctions.getUsersBatch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/users', null, options, 'batch');
    this.getBase(callUrl, callback);
};

userFunctions.usersSearch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['searchTerm']);

    var callUrl = this.makeCallUrl('/users', null, options, 'search');
    this.getBase(callUrl, callback);
};

module.exports = userFunctions;