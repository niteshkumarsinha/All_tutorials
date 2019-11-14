function factorial_Iteratively(num) {
    result = 1
    for (let i = num; i > 0; i--) {
        result *= i;
    }

    return result;
}

function factorial_Recursively(num) {
    if (num === 0 || num === 1) {
        return 1
    }

    return num * factorial_Recursively(num - 1);
}


console.log(factorial_Iteratively(5));
console.log(factorial_Recursively(5));