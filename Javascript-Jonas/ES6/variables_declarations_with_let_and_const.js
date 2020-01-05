//ES5

var name5 = 'Jane Smith' ;
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);


//ES6
const name6 = 'Jane Smith';
let age = 23;
//name6 = 'Jane Miller'; 
console.log(name6);


//vars are function scoped and let , const are block scoped
//ES5

function driversLicense5(passedTest){
    if (passedTest){
        var firstname = 'John';
        var yearOfBirth = 1990;
      }
    console.log(firstname + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car' );
    
}


driversLicense5(true);


//ES6
function driversLicense6(passedTest){
    if (passedTest){
        let firstname = 'John';
        const yearOfBirth = 1990;
        console.log(firstname + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car' );
    }
}

driversLicense6(true);

//let is block scoped
let i = 121;
for (let i = 0 ; i < 5; i++){
    console.log(i);
}
console.log(i);


//var is not block scoped
var j = 121;

for (var j = 0 ; j < 5; j++){
    console.log(j);
}

console.log(j);
