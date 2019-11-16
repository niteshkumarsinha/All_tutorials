//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  let result = 1;

  if (num === 1 || num === 0) return 1;

  result = num * factorial(num - 1);

  console.log(result);
  return result;
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24

console.log(factorial(7)); // 5040
