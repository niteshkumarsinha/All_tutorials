function printAllPairs(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(i, j)
        }
    }
}

console.log(printAllPairs(2))

// This function O(n) inside O(n)
// O(n) * O(n) = O(n*n) = O(n^2)