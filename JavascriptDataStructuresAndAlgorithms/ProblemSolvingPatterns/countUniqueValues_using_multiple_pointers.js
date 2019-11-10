//accepts a sorted array
//counts unique values in the array
//can be negative numbers but always sorted

// function countUniqueValues(sortedArray) {
//     let seen = {}
//     count = 0

//     for (let num of sortedArray) {
//         if (seen[num] != 1) {
//             count++;
//             seen[num] = 1
//         }
//     }

//     return count
// }

//using pointers approach

function countUniqueValues(sortedArray) {
    if (sortedArray.length === 0) {
        return 0
    }
    i = 0

    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] !== sortedArray[j]) {
            i++;
            sortedArray[i] = sortedArray[j];
        }
    }
    return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))