function collectOdd(numArr) {
  let result = [];

  if (numArr.length === 0) {
    return result;//we return empty array as we are concating arrays
  }

  if (numArr[0] % 2 !== 0) {
    result.push(numArr[0]);
  }

  // Step1: result = [1]
  result = result.concat(collectOdd(numArr.slice(1)));

  //Recursion Steps
  //Step2: [1].concat(collectOdd([2,3,4,5]))
  //Step3:             [].concat(collectOdd([3,4,5]))
  //Step4:                       [3].concat(collectOdd([4,5]))
  //Step5:                                  [].concat(collectOdd([5]))
  //Step6:                                             [5].concat(collectOdd([]))
  //Step7:                                                        return []
  //Step8:                                             [5].concat([])
  //Step9:                                  [].concat([5])
  //Step10:                                 [5]
  //Step11:                      [3].concat([5])
  //Step12:                      [3,5]
  //Step13:            [].concat([3,5])
  //Step14:            [3,5]
  //Step15: [1].concat([3,5])
  //Step16: [1,3,5]
  //result = [1,3,5]
  return result;
}

console.log(collectOdd([1, 2, 3, 4, 5]));
