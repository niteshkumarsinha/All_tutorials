function sumRange(num) {
    if (num === 1) { //base case
        return 1;
    }
    return num + sumRange(num - 1);//call the function with different input
}


sumRange(5)

// 5 + sumRange(5-1)
// 5 + 4 + sumRange(4-1)
// 5 + 4 + 3 + sumRange(3-1)
// 5 + 4 + 3 + 2 + sumRange( 2-1)
// 5 + 4 + 3 + 2 + 1
// return 15
