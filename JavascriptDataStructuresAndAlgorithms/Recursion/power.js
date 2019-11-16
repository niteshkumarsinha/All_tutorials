function power(num, exp) {
  let result = num;

  if (exp == 1) {
    return num;
  } else if (exp == 0) {
    return 1;
  }
  result *= power(num, exp - 1);
  // result *= power(2, 3)
  // result *= power(2,2)
  // result *= power(2,1)
  //  return 2
  // result *= 2 = 4
  // result *= 4
  // result = 2 * 4 = 8

  return result;
}

console.log(power(2, 0));
