const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//Loops through both arrays, so O(N)

//splice(start_index, no_of_elements_to_remove, "elements to add in array as comma separated values")
array1.splice(0, 0, "ABC")
console.log(array1)

//O(n)