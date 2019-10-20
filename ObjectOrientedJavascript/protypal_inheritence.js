function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`
}

const person = new Person('John', 'Doe')


//Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    //call is a function that allows us to call another function from somewhere else in current context
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit Person Prototype Methods
Customer.prototype = Object.create(Person.prototype)
//Change Person to Customer in __proto__ in constructor i.e make customer.prototype return Customer
Customer.prototype.constructor = Customer;

//Override Person greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}. Welcome to our Company!!!`
}


const customer1 = new Customer('Tom', 'Smith', '555-5555-555', 'standard')
console.log(customer1.greeting())


