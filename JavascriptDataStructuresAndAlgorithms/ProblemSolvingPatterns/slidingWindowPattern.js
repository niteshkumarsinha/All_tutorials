//Ex: Find longest sequence of unique characters


// Ex: write a function maxSubArraySum which accepts an array of integers and a number called n .
// function should calculate max sum of n consecutive elements in the array

//naive aproach
// function maxSubArraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }

//     }

//     return max;

// }


//using sliding window pattern
function maxSubArraySum(arr, num) {
    let max_sum = 0;
    let temp_sum = 0;
    if (num > arr.length) {
        return null
    }
    for (let i = 0; i < num; i++) {
        temp_sum += arr[i];
    }
    max_sum = temp_sum;

    for (i = num; i < arr.length; i++) {
        temp_sum += arr[i] - arr[i - num];
        max_sum = Math.max(temp_sum, max_sum)
        console.log(temp_sum, max_sum)
    }

    return max_sum;
}


console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubArraySum([4, 2, 1, 6], 1))
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubArraySum([], 4))