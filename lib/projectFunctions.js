var async = require('async'),
    projectFunctions = {};

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

    var callUrl = this.makeCallUrl('/projects', id, options, 'details');
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


// test!
//@TODO Add delays
/**
 *
 * @param id
 */
projectFunctions.getAllProjectData = function (id) {
    var self = this;
    async.parallel({
        base: function (callback) {
            self.getProject(id, callback);
        },
        components: function (callback) {
            self.getProjectComments(id, callback);
        },
        instructions: function (callback) {
            self.getProjectInstructions(id, callback);
        },
        logs: function (callback) {
            self.getProjectLogs(id, callback);
        },
        comments: function (callback) {
            self.getProjectComments(id, callback);
        },
        followers: function (callback) {
            self.getProjectFollowers(id, callback);
        },
        skulls: function (callback) {
            self.getProjectSkulls(id, callback);
        },
        team: function (callback) {
            self.getProjectTeam(id, callback);
        },
        tags: function (callback) {
            self.getProjectTeam(id, callback);
        },
        links: function (callback) {
            self.getProjectLinks(id, callback);
        },
        images: function (callback) {
            self.getProjectImages(id, callback);
        },
        details: function (callback) {
            self.getProjectDetails(id, callback);
        }
    }, function (err, data) {
        if (err) {
            console.log('Error: ', err);
        }

        console.log(data);
    });
};


// /test!


module.exports = projectFunctions;