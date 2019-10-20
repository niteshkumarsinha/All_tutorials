//Each object in javascript has a prototype and prototype is an object itself
//All objects inherit their properties and methods from their prototypes

//Object literals inherit from Object.prototype


function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime()
    //     const ageDate = new Date(diff)
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Since calculateage will be same for all person
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getsMarried = function (newLastname) {
    this.lastName = newLastname;
}

const John = new Person('John', 'Doe', '8-12-1990');
const Mary = new Person('Mary', 'Johnson', 'March 20 1978');

John.getsMarried('Smith')
console.log(John.getFullName())

console.log(John.hasOwnProperty('firstName'))

