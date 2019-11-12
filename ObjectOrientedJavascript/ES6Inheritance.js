class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMemberShipCost() {
        return 500
    }
}

const john = new Customer("John", "Doe", "9916851812", "Standard");

console.log(john)

console.log(Customer.getMemberShipCost())