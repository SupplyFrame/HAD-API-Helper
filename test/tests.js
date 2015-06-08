var hadApi = require('../hadapihelper.js');

TRAVIS_SECURE_ENV_VARS = true;

// Set Client Data Here:
hadApi.setClientData({
    id: 'null',
    secret: 'null',
    key: process.env.travis || null
});

var apiUrl = hadApi.getApiUrl(),
    apiParam = hadApi.getApiKeyAsParam(),
    compareCalls = require('./utils.js').compareCalls;

describe('GET Projects functions', function() {
    describe('.getProjects', function() {
        this.timeout(5000);
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam,
                helperArgs = null;
            compareCalls(directUrl, hadApi.getProjects, [helperArgs], done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getProjects, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getProjects, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/projects' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getProjects, [helperArgs], done);
        });
    });
    describe('.getProject', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProject, [id], done);
        });
    });
    describe('.getProjectTeam', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/team' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectTeam, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/team' + apiParam + '&sortby=newest',
                id = 46,
                options = {sortby: 'newest'};
            compareCalls(directUrl, hadApi.getProjectTeam, [id, options], done);
        });
    });
    describe('.getProjectFollowers', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/followers' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectFollowers, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/followers' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectFollowers, [id, options], done);
        });
    });
    describe('.getProjectSkulls', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/skulls' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectSkulls, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/skulls' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectSkulls, [id, options], done);
        });
    });
    describe('.getProjectComments', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/comments' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectComments, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/comments' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectComments, [id, options], done);
        });
    });
    describe('.getProjectTags', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/tags' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectTags, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/tags' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectTags, [id, options], done);
        });
    });
    describe('.getProjectImages', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/images' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectImages, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/images' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectImages, [id, options], done);
        });
    });
    describe('.getProjectLinks', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/links' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectLinks, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/links' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectLinks, [id, options], done);
        });
    });
    describe('.getProjectComponents', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/components' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectComponents, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/components' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectComponents, [id, options], done);
        });
    });
    describe('.getProjectLogs', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/logs' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectLogs, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/logs' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectLogs, [id, options], done);
        });
    });
    describe('.getProjectInstructions', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/instructions' + apiParam,
                id = 46;
            compareCalls(directUrl, hadApi.getProjectInstructions, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/46/instructions' + apiParam + '&sortby=followers',
                id = 46,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectInstructions, [id, options], done);
        });
    });
    describe('.getProjectDetails', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/1340/details' + apiParam,
                id = 1340;
            compareCalls(directUrl, hadApi.getProjectDetails, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/1340/details' + apiParam + '&sortby=followers',
                id = 1340,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getProjectDetails, [id, options], done);
        });
    });
    describe('.getProjectsRange', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/range' + apiParam + '&ids=50,100',
                options = { ids: [50, 100] };
            compareCalls(directUrl, hadApi.getProjectsRange, [options], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/range' + apiParam + '&ids=50,100&sortby=skulls',
                options = { ids: [50, 100], sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getProjectsRange, [options], done);
        });
    });
    describe('.getProjectsBatch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/batch' + apiParam + '&ids=100,450,850',
                options = { ids: [100, 450, 850] };
            compareCalls(directUrl, hadApi.getProjectsBatch, [options], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/batch' + apiParam + '&ids=100,450,850&sortby=followers',
                options = { ids: [100, 450, 850], sortby: 'followers' };
            compareCalls(directUrl, hadApi.getProjectsBatch, [options], done);
        });
    });
    describe('.projectsSearch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/projects/search' + apiParam + '&search_term=arduino',
                options = { searchTerm: 'arduino' };
            compareCalls(directUrl, hadApi.projectsSearch, [options], done);
        });
    });
});
describe('GET Users functions', function() {
    describe('.getUsers', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users' + apiParam,
                helperArgs = null;
            compareCalls(directUrl, hadApi.getUsers, helperArgs, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getUsers, helperArgs, done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getUsers, helperArgs, done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getUsers, helperArgs, done);
        });
    });
    describe('.getUser', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUser, [id], done);
        });
    });
    describe('.getUserFollowing', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/following' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserFollowing, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/following' + apiParam + '&sortby=newest',
                id = 1,
                options = {sortby: 'newest'};
            compareCalls(directUrl, hadApi.getUserFollowing, [id, options], done);
        });
    });
    describe('.getUserFollowers', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/followers' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserFollowers, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/followers' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getUserFollowers, [id, options], done);
        });
    });
    describe('.getUserSkulls', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/skulls' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserSkulls, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/skulls' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getUserSkulls, [id, options], done);
        });
    });
    describe('.getUserPages', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/pages' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserPages, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/pages' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getUserPages, [id, options], done);
        });
    });
    describe('.getUserTags', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/tags' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserTags, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/tags' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getUserTags, [id, options], done);
        });
    });
    describe('.getUserLinks', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/links' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserLinks, [id], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/1/links' + apiParam + '&sortby=followers',
                id = 1,
                options = {sortby: 'followers'};
            compareCalls(directUrl, hadApi.getUserLinks, [id, options], done);
        });
    });
    describe('.getUsersRange', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/range' + apiParam + '&ids=50,100',
                options = { ids: [50, 100] };
            compareCalls(directUrl, hadApi.getUsersRange, [options], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/range' + apiParam + '&ids=50,100&sortby=skulls',
                options = { ids: [50, 100], sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getUsersRange, [options], done);
        });
    });
    describe('.getUsersBatch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/batch' + apiParam + '&ids=100,450,850',
                options = { ids: [100, 450, 850] };
            compareCalls(directUrl, hadApi.getUsersBatch, [options], done);
        });
        it('GET sortby works', function(done) {
            this.timeout(5000);
            var directUrl = apiUrl + '/users/batch' + apiParam + '&ids=100,450,850&sortby=followers',
                options = { ids: [100, 450, 850], sortby: 'followers' };
            compareCalls(directUrl, hadApi.getUsersBatch, [options], done);
        });
    });
    describe('.usersSearch', function() {
        // test normal GET
        it('GET works', function(done) {
            this.timeout(20000);
            var directUrl = apiUrl + '/users/search' + apiParam + '&search_term=3d',
                options = { searchTerm: '3d' };
            compareCalls(directUrl, hadApi.usersSearch, [options], done);
        });
    });
});
describe('GET Search functions', function() {
    describe('.search', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/search' + apiParam + '&search_term=orange',
                helperArgs = { searchTerm: 'orange' };
            compareCalls(directUrl, hadApi.search, [helperArgs], done);
        });
    });
});
describe('GET Comment functions', function() {
    describe('.getUserComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/users/1' + apiParam,
                id = 1;
            compareCalls(directUrl, hadApi.getUserComments, [id], done);
        });
    });
    describe('.getLogComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/logs/460' + apiParam,
                id = 460;
            compareCalls(directUrl, hadApi.getLogComments, [id], done);
        });
    });
    describe('.getInstructionComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/instructions/1500' + apiParam,
                id = 1500;
            compareCalls(directUrl, hadApi.getInstructionComments, [id], done);
        });
    });
    describe('.getContestComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/contests/3432' + apiParam,
                id = 3432;
            compareCalls(directUrl, hadApi.getContestComments, [id], done);
        });
    });
    describe('.getEventComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/events/3178' + apiParam,
                id = 3178;
            compareCalls(directUrl, hadApi.getEventComments, [id], done);
        });
    });
    describe('.getHackerspaceComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/hackerspaces/722' + apiParam,
                id = 722;
            compareCalls(directUrl, hadApi.getHackerspaceComments, [id], done);
        });
    });
    describe('.getStackComments', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/comments/stack/997' + apiParam,
                id = 997;
            compareCalls(directUrl, hadApi.getStackComments, [id], done);
        });
    });
});
describe('GET Feed functions', function() {
    describe('.getFeed', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/feeds/global' + apiParam;
            compareCalls(directUrl, hadApi.getFeed, null, done);
        });
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/feeds/global/' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getFeed, [helperArgs], done);
        });
    });
});
describe('GET Pages functions', function() {
    describe('.getListPages', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/lists' + apiParam;
            compareCalls(directUrl, hadApi.getListPages, null, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/lists' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getListPages, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/lists' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getListPages, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/lists' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getListPages, [helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getListPage', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/lists/2864' + apiParam,
                id = 2864;
            compareCalls(directUrl, hadApi.getListPage, [id], done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/lists/2864' + apiParam + '&page=2',
                id = 2864,
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getListPage, [id, helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/lists/2864' + apiParam + '&per_page=5',
                id = 2864,
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getListPage, [id, helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/lists/2864' + apiParam + '&sortby=skulls',
                id = 2864,
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getListPage, [id, helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getStackPages', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/stack' + apiParam;
            compareCalls(directUrl, hadApi.getStackPages, null, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/stack' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getStackPages, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/stack' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getStackPages, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/stack' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getStackPages, [helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getStackPage', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/stack/917' + apiParam,
                id = 917;
            compareCalls(directUrl, hadApi.getStackPage, [id], done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/stack/917' + apiParam + '&page=2',
                id = 917,
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getStackPage, [id, helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/stack/917' + apiParam + '&per_page=5',
                id = 917,
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getStackPage, [id, helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getEventPages', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/events' + apiParam;
            compareCalls(directUrl, hadApi.getEventPages, null, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/events' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getEventPages, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/events' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getEventPages, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/events' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getEventPages, [helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getContestPages', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/contests' + apiParam;
            compareCalls(directUrl, hadApi.getContestPages, null, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/contests' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getContestPages, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/contests' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getContestPages, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/contests' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getContestPages, [helperArgs], done);
        });
        this.timeout(5000);
    });
    describe('.getHackerspacePages', function() {
        // test normal GET
        it('GET works', function(done) {
            var directUrl = apiUrl + '/pages/hackerspaces' + apiParam;
            compareCalls(directUrl, hadApi.getHackerspacePages, null, done);
        });
        // test GET with page #
        it('GET with page # works', function(done) {
            var directUrl = apiUrl + '/pages/hackerspaces' + apiParam + '&page=2',
                helperArgs = { page: 2 };
            compareCalls(directUrl, hadApi.getHackerspacePages, [helperArgs], done);
        });
        // test GET with pagination
        it('GET with pagination works', function(done) {
            var directUrl = apiUrl + '/pages/hackerspaces' + apiParam + '&per_page=5',
                helperArgs = { perPage: 5 };
            compareCalls(directUrl, hadApi.getHackerspacePages, [helperArgs], done);
        });
        // test GET with all sortby
        it('GET with sortby works', function(done) {
            var directUrl = apiUrl + '/pages/hackerspaces' + apiParam + '&sortby=skulls',
                helperArgs = { sortby: 'skulls' };
            compareCalls(directUrl, hadApi.getHackerspacePages, [helperArgs], done);
        });
        this.timeout(5000);
    });
});