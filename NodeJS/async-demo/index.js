console.log("Before")
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


// getUser(1)
//     .then((user) => getRepositories(user.gitHubUserName))
//     .then((repos) => getCommits(repos[0]))
//     .then((commits) => console.log(commits))
//     .catch((err) => console.log(err.message))

// getUser(1, getRepositories)

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUserName);
        const commits = await getCommits(repos[0])
        console.log(commits);
    } catch (err) {
        console.log(err.message)
    }

}

displayCommits()


function getRepositories(user) {
    getRepositories(user.gitHubUserName, getCommits)
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}

// function displayCommits(commits) {
//     console.log(commits);
// }

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from a database")
            resolve({ id: id, gitHubUserName: 'nitesh' })
        }, 2000);
    });

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(['repo1', 'repo2', 'repo3']) }, 2000)
    });

}


function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['commit'])
        }, 2000);
    })
}

console.log("After");