var superagent = require('superagent'),
    expect = require('chai').expect,
    hadApi = require('./hadapihelper.js'),
    clientData = hadApi.getClientData(),
    apiUrl = hadApi.getApiUrl(),
    clientId = clientData.id,
    clientSecret = clientData.secret,
    apiKey = clientData.key,
    apiParam = hadApi.getApiKeyAsParam();

function compareResponses (directResponseBody, hadApiHelperResponseBody) {
    var directResponseObj, hadApiHelperResponseObj;

    directResponseObj = (typeof directResponseBody === 'string') 
                            ? JSON.parse(directResponseBody) 
                            : directResponseBody;

    hadApiHelperResponseObj = (typeof hadApiHelperResponseBody === 'string') 
                            ? JSON.parse(hadApiHelperResponseBody) 
                            : hadApiHelperResponseBody;

    expect(directResponseObj).to.deep.equal(hadApiHelperResponseObj);
}


describe('GET Projects functions', function() {
    describe('.getProjects', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam,
                helperArgs = null;
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjects(function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjects(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjects(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjects(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
            this.timeout(5000);
    });
    describe('.getProject', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProject(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectTeam', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/team' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectTeam(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/team' + apiParam + '&sortby=newest',
                id = 46,
                options = {sortby: 'newest'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectTeam(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectFollowers', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/followers' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectFollowers(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/followers' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectFollowers(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectSkulls', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/skulls' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectSkulls(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/skulls' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectSkulls(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectComments', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/comments' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectComments(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/comments' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectComments(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectTags', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/tags' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectTags(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/tags' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectTags(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectImages', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/images' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectImages(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/images' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectImages(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectLinks', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/links' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectLinks(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/links' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectLinks(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectComponents', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/components' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectComponents(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/components' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectComponents(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectLogs', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/logs' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectLogs(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/logs' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectLogs(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectInstructions', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/instructions' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectInstructions(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/instructions' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectInstructions(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectDetails', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/details' + apiParam,
                id = 46;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectDetails(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/details' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectDetails(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectsRange', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/range' + apiParam + '&ids=50,100',
                options = { ids: [50, 100] };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectsRange(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/range' + apiParam + '&ids=50,100&sortby=skulls',
                options = { ids: [50, 100], sortby: 'skulls' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectsRange(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getProjectsBatch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/batch' + apiParam + '&ids=100,450,850',
                options = { ids: [100, 450, 850] };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectsBatch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/batch' + apiParam + '&ids=100,450,850&sortby=followers',
                options = { ids: [100, 450, 850], sortby: 'followers' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getProjectsBatch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.projectsSearch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/search' + apiParam + '&search_term=arduino',
                options = { searchTerm: 'arduino' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.projectsSearch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
});
xdescribe('GET Users functions', function() {
    describe('.getUsers', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/users' + apiParam,
                helperArgs = null;
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsers(function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/users' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsers(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/users' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsers(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/users' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsers(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
            this.timeout(5000);
    });
    describe('.getUser', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUser(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserFollowing', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/following' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserFollowing(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/following' + apiParam + '&sortby=newest',
                id = 1,
                options = {sortby: 'newest'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserFollowing(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserFollowers', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/followers' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserFollowers(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/followers' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserFollowers(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserSkulls', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/skulls' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserSkulls(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/skulls' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserSkulls(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserPages', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/pages' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserPages(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/pages' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserPages(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserTags', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/tags' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserTags(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/tags' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserTags(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUserLinks', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/links' + apiParam,
                id = 1;
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserLinks(id, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/links' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserLinks(id, options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUsersRange', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/range' + apiParam + '&ids=50,100',
                options = { ids: [50, 100] };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsersRange(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/range' + apiParam + '&ids=50,100&sortby=skulls',
                options = { ids: [50, 100], sortby: 'skulls' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsersRange(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getUsersBatch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/batch' + apiParam + '&ids=100,450,850',
                options = { ids: [100, 450, 850] };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsersBatch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/batch' + apiParam + '&ids=100,450,850&sortby=followers',
                options = { ids: [100, 450, 850], sortby: 'followers' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUsersBatch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.usersSearch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(20000);
            var directUrl = apiUrl + '/users/search' + apiParam + '&search_term=3d',
                options = { searchTerm: '3d' };
            console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.usersSearch(options, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
});
xdescribe('GET Search functions', function() {
    describe('.search', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/search' + apiParam + '&search_term=orange',
                helperArgs = { searchTerm: 'orange' };
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.search(helperArgs, function (error, responseData) {
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
});
xdescribe('GET Comment functions', function() {
    describe('.getUserComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/users/1' + apiParam,
                id = 1;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getUserComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getLogComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/logs/460' + apiParam,
                id = 460;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getLogComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getInstructionComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/instructions/1500' + apiParam,
                id = 1500;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getInstructionComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getContestComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/contests/3432' + apiParam,
                id = 3432;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getContestComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getEventComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/events/3178' + apiParam,
                id = 3178;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getEventComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getHackerspaceComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/hackerspaces/722' + apiParam,
                id = 722;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getHackerspaceComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
    describe('.getStackComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/stack/997' + apiParam,
                id = 997;
                console.log(directUrl);
            superagent
                .get(directUrl)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.status).to.equal(200);
                    hadApi.getStackComments(id, function (error, responseData) {
                            console.log(error)
                        expect(error).to.be.null;
                        compareResponses(res.body, responseData);
                        done();
                    });
                });
        });
    });
});


