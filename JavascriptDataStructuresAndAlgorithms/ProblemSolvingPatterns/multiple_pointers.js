// accepts a sorted array of integers
// find first pair where the sum is 0
// returns an array that includes both the values that sum to 0 or undefined if a pair does not exist.


function sumZero(numbers) {
    for (let num of numbers) {
        index = numbers.indexOf(num)
        for (let i = 0; i < numbers.length; i++) {

            if (num + numbers[i] == 0 && index !== i) {
                return [num, numbers[i]]
            }
        }
    }

    return undefined
}


//solution using multiple pointers in O(n)

function sumZero2(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] === 0) {
            return [numbers[left], numbers[right]];
        } else if (numbers[left] + numbers[right] > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero2([-2, 0, 1, 3]))
console.log(sumZero2([1, 2, 3]))


