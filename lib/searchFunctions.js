var searchFunctions = {};

searchFunctions.search  = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['searchTerm']);

    var callUrl = this.makeCallUrl('/search', null, options, null);
    this.base(callUrl, callback);
};

module.exports = searchFunctions;