var userFunctions = {};

userFunctions.getUsers = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', null, options);
    this.base(callUrl, callback);
};

userFunctions.getUser = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, []);

    var callUrl = this.makeCallUrl('/users', id, options);
    this.base(callUrl, callback);
};

userFunctions.getUserFollowing = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'following');
    this.base(callUrl, callback);
};

userFunctions.getUserFollowers = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'followers');
    this.base(callUrl, callback);
};

userFunctions.getUserSkulls = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'skulls');
    this.base(callUrl, callback);
};

userFunctions.getUserPages = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'pages');
    this.base(callUrl, callback);
};

userFunctions.getUserTags = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'tags');
    this.base(callUrl, callback);
};

userFunctions.getUserLinks = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/users', id, options, 'links');
    this.base(callUrl, callback);
};

userFunctions.getUsersRange = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/users', null, options, 'range');
    this.base(callUrl, callback);
};

userFunctions.getUsersBatch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/users', null, options, 'batch');
    this.base(callUrl, callback);
};

userFunctions.usersSearch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['searchTerm']);

    var callUrl = this.makeCallUrl('/users', null, options, 'search');
    this.base(callUrl, callback);
};

module.exports = userFunctions;