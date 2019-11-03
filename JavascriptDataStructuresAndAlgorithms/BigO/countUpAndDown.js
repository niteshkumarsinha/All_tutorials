function countUpAndDown(n) {
    console.log("Counting Up")

    for (let i = 0; i <= n; i++) {
        console.log(i)
    }

    console.log("At the top\nCounting Down")

    for (let i = n; i >= 0; i--) {
        console.log(i)
    }
}

countUpAndDown(10)


// This function  is 
// O(n) + O(n) = O(2n) = O(n)