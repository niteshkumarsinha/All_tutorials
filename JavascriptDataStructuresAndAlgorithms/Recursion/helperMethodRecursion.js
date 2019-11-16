function collectOddAllValues(numArr) {
  let result = [];
  function helper(numArr) {
    if (numArr.length === 0) return;

    if (numArr[0] % 2 !== 0) {
      result.push(numArr[0]);
    }

    numArr = numArr.slice(1);
    helper(numArr);
  }

  helper(numArr);

  return result;
}

//outer function non recursive calls inner function which is recursive
console.log(collectOddAllValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
