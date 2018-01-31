# ReactProject102
24/01/2018 Developer Test: Frontend Development - Google Docs
https://docs.google.com/document/d/1TPqmU8dePMzGQ0hHzmXoqlPAkg1Kx0fNIpg5apHs_Ac/edit# 1/5
Developer Test: Frontend Development
Deadline: 30Th Jan 2018 14:00hrs (2pm)
Summary
We need you to take the following standard technical assessment to enable us to gauge the
following:
1. How you write code using a either ReactJS or VueJS. (correctness, efficiency, readable,
clear).
2. How you decompose a problem and design a soluon.
3. How you are able to maintain a consistent state throughout the applicaon
using a
dedicated state management container (vuex for VueJS and redux for ReactJS).
4. How you are able to conform to ECMAScript standards for JavaScript throughout the
applicaon.
5. Are you able to consume an API to communicate with an external data source within your
applicaon?
6. How complete and thoughul
your implementaon
is. Can the reviewer run it
immediately?
Quiz:
Given the below API endpoint and aached
design template, you are required to complete the
following tasks:
1. Setup a fresh web app based on either of the following JavaScript Frameworks:
a. VueJS
b. ReactJS
The setup should use Webpack as the dedicated module bundler and dependency
manager for your web app. It should also use either yarn or npm for package
management.
24/01/2018 Developer Test: Frontend Development - Google Docs
https://docs.google.com/document/d/1TPqmU8dePMzGQ0hHzmXoqlPAkg1Kx0fNIpg5apHs_Ac/edit# 2/5
Hint:
If you are unable to configure webpack yourself, you could use the following templates
that contain pre configured webpack sengs:
a. Vue‑CLI for VueJS
b. CreateReactApp for ReactJS
2. Establish a stable state tree for the applicaon
using either of the following state
management libraries:
a. vuex for VueJS
b. redux for ReactJS.
3. Once all is set, use the provided API endpoint to fetch data from an external server and
display it in your web app, conforming to the designs specified in the aached
template.
The API returns a long list of random users and hence you are required to ensure that the
list is well paginated and correctly displayed as the user of the web app scrolls through
the different pages of the users list.
Note:
It is key for your web app to use a state management container to handle all data mutaons.
As
such, you are required to illustrate the use of the different component lifecycle hooks of the
framework used as well as the following key concepts of state management container used:
Vuex:
State
Store
Acons
Mutaons
Mutaon
types
Geers
Redux:
State
Store
Reducers
Acons
Acon
creators
Complemenng
the understanding of the JavaScript framework used, the quiz focuses on
knowledge of scoping, funcon
expressions (and how they differ from funcon
declaraons),
references, process of variable and funcon
declaraon,
order of evaluaon,
and a couple more
24/01/2018 Developer Test: Frontend Development - Google Docs
https://docs.google.com/document/d/1TPqmU8dePMzGQ0hHzmXoqlPAkg1Kx0fNIpg5apHs_Ac/edit# 3/5
things like delete operator, object and array instanaon,
assignment and mutaon
as used in
JavaScript. These are all relavely
simple concepts, which we think every professional JavaScript
developer should know. Most of these are applied in pracce
quite oen.
API Endpoints:
Browse
Method: GET
Endpoint:
hps://dry‑harbor‑88607.herokuapp.com/api/users?page[number]=${num}&page[size]=${num}
Params:
1. page[number]
{
type: Integer,
default: null,
}
Captures the current paginaon
page for the retrieved users list
2. page[size]
{
type: Integer,
default: null,
}
Captures the number of items to be included per single paginaon
page of the retrieved
users list
Edit
Method: PATCH
Endpoint: hps://dry‑harbor‑88607.herokuapp.com/api/users/{fingerprint}
Params: {"user": { "name": "Example User"}}
24/01/2018 Developer Test: Frontend Development - Google Docs
https://docs.google.com/document/d/1TPqmU8dePMzGQ0hHzmXoqlPAkg1Kx0fNIpg5apHs_Ac/edit# 4/5
‑‑‑‑‑‑‑‑‑
Nice to have ‑ these are in order of preference and will garner extra points for speed
Add
Method: POST
Endpoint: hps://dry‑harbor‑88607.herokuapp.com/api/users
Params: { "user": {"name": "Tesng
User", "email": "example@user.com", "password": "password",
"mobile_number": "0756565656"}}
Delete
Method: DELETE
Endpoint: hps://dry‑harbor‑88607.herokuapp.com/api/users/{fingerprint}
Read
Method: GET
Endpoint: hps://dry‑harbor‑88607.herokuapp.com/api/users/{fingerprint}
Extra points for prey
funconality.
Submission:
Note that this task will require you to have a github/gitlab account. If you don't have either, you
are required to setup one.
Once you have completed the assessment reply to this email with a link to the github repo
(Please ensure that the repo is public). You can remove it once we have given you feedback.
24/01/2018 Developer Test: Frontend Development - Google Docs
https://docs.google.com/document/d/1TPqmU8dePMzGQ0hHzmXoqlPAkg1Kx0fNIpg5apHs_Ac/edit# 5/5
Example UX
Browse Page
Edit User
