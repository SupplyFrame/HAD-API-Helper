var projectFunctions = {};

projectFunctions.getProjects = function (options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', null, options);
    this.getBase(callUrl, callback);
};

projectFunctions.getProject = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 1, options, []);

    var callUrl = this.makeCallUrl('/projects', id, options);
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectTeam = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'team');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectFollowers = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'followers');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectSkulls = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'skulls');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectComments = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'comments');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectTags = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'tags');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectLinks = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'links');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectImages = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'images');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectComponents = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'components');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectLogs = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'logs');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectInstructions = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'instructions');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectDetails = function (id, options, callback)  {
    callback = this.verifyCallbackArgument(options, callback);
    this.verifyArguments(arguments, 2, options, ['sortby']);

    var callUrl = this.makeCallUrl('/projects', id, options, 'range');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectsRange = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/projects', null, options, 'range');
    this.getBase(callUrl, callback);
};

projectFunctions.getProjectsBatch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['sortby', 'ids']);

    var callUrl = this.makeCallUrl('/projects', null, options, 'batch');
    this.getBase(callUrl, callback);
};

projectFunctions.projectsSearch = function (options, callback)  {
    this.verifyArguments(arguments, 2, options, ['searchTerm']);

    var callUrl = this.makeCallUrl('/projects', null, options, 'search');
    this.getBase(callUrl, callback);
};

module.exports = projectFunctions;