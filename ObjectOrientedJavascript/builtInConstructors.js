const name1 = "Nitesh"
const name2 = new String("Nitesh")

console.log(name1)
console.log(name2)


console.log(typeof name1)
console.log(typeof name2)

const num1 = 5;
const num2 = new Number(5);

console.log(num2)
const boolean = new Boolean(true)
console.log(boolean)

const getSum1 = function (x, y) {
    return x + y
}
const getSum2 = new Function('x', 'y', 'return x + y')
console.log(getSum2(2, 2))

//Object

const john1 = { name: "John" }
const john2 = new Object({ name: "John" })

const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr2);


// Regular Expressions

const regEx = /\w+/;
const regEx2 = new RegExp('\\w+')

