// //object literal
// const brad = {
//     name: "Brad",
//     age: 30
// }

// console.log(brad)
// console.log(brad.age)



//Constructor function

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

console.log(this)
const brad = new Person("brad", 36);
const john = new Person("john", 30);


console.log(brad);
console.log(john);


const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());