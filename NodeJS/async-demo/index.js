// console.log("Before")
// //After 2 seconds this will run a callback without blocking the code
// setTimeout(() => { console.log("Reading a user from a database") }, 2000)
// console.log("After")



// console.log("Before")
// getUser(1, (user) => {
//     console.log(user)
//     getRepositories(user.gitHubUserName, (repos) => {
//         console.log(repos)
//         getCommits(repo, (commits) => {

//         });
//     });
// });
// console.log("After");

getUser(1, getRepositories)

function getRepositories(user){
    getRepositories(user.gitHubUserName, getCommits)
}

function getCommits(repos){
    getCommits(repo , displayCommits)
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database")
        callback({ id: id, gitHubUserName: 'nitesh' })
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => { callback(['repo1', 'repo2', 'repo3']) }, 2000)
}