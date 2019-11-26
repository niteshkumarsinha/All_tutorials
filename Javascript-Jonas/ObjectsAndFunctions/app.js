//Creating Objects using function constructor

// var john = {
//   name: "John",
//   yearOfBirth: "2007",
//   job: "teacher"
// };

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

console.log(john);
console.log(jane);
console.log(mark);

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//Object.create

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var nitesh = Object.create(personProto);

nitesh.name = "Nitesh Kumar";
nitesh.yearOfBirth = 2000;
nitesh.job = "job";

var niteshKumar = Object.create(personProto, {
  name: { value: "Nitesh Kumar" },
  yearOfBirth: { value: 2000 },
  job: { value: "job" }
});

//Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrResult = [];
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return 2019 - el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(arrayCalc(years, isFullAge));
console.log(arrayCalc(ages, maxHeartRate));

// function returning a function

function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can u please explain what UX design is");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", What subject u teach");
    };
  } else {
    return function(name) {
      console.log(name + " Hello , What do u do");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");

teacherQuestion("nitesh");

//IIFES

(function() {
  var score = Math.random() * 10;
  console.log(score);
})();

//Closures

function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1992);
retirementGermany(1992);
retirementIceland(1992);

//Bind Call and Apply (methods inherited from function constructor)

var john = {
  name: "John",
  age: 26,
  job: "Teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " ladies and gentleman! I'm " +
          this.name +
          " I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey What's up? " +
          "I'm " +
          this.name +
          " I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

//To use presentation method for emily object which doesn't have this presentation, we can use call method
//first argument of call method is always to set this variable
john.presentation("formal", "morning");
john.presentation.call(emily, "friendly", "afternoon"); // this variable will be set to emily object
// the above is called method borrowing

//"apply" is similar to call with difference is arguments are in array form
//john.presentation.apply(emily, ["friendly", "afternoon"]);//In this case it wont work as presentation function doesn't accepts an array

///////////////////////////////////////////////////
//BIND

//It also allows us to set this variable explicitly,  but differnce is doesn't call the function immediately but creates a copy of it
//It helps to preset arguments

var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("afternoon"); //we have a function only for friendly version
johnFriendly("night");


var emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal("afternoon");
