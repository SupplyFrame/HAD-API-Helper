#HAD-API-Helper


Accepts 


####`.setClientData`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|obj|object|Input your client ID, secret, and API key for queries
```javascript
var hadApi = require('hadApi');

hadApi.setClientData({
    id: null,       // Your client ID
    secret: null,   // Your client secret
    key: null       // Your client API key
});
```

####`.getUsers`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUser`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserFollowing`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserFollowers`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserSkulls`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserPages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserTags`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserLinks`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUsersRange`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUsersBatch`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.usersSearch`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjects`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProject`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectTeam`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectFollowers`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectSkulls`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectTags`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectLinks`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectImages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectComponents`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectLogs`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectInstructions`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectDetails`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectsRange`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `id`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getProjectsBatch`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `id`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.projectsSearch`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `searchTerm`, `page`, and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.search`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `searchTerms`
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getCommentsBase`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|type|type|description
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getUserComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getLogComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getInstructionComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getContestComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getEventComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getHackerspaceComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getStackComments`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getFeed`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getListPages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getListPage`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getStackPages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getStackPage`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|id|int|ID of the requested item
|options|object|Key-Value of these accepted API query params: `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getEventPages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getContestPages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getHackerspacePages`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
|options|object|Key-Value of these accepted API query params: `sortby`, `page` and `perPage`.
|callback|function|callback function that accepts parameters `error` and `result`.
```javascript




```
####`.getAuthToken`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
```javascript




```
####`.getCode`


| **Name**   |      **Type**      | **Description** |
|----------|-------------|------|
```javascript




```
