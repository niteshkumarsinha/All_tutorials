// const square = function(x){
//     return x*x;
// }

const square = x => x * x; 

console.log(square(9));

const event = {
    name : 'Birthday Party',
    printGuestList() {
        console.log('Guest List For: ' + this.name);
    } 
}

event.printGuestList()

