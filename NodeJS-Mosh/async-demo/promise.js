//A promise is an object that holds the eventual result of an asynchronous operation
//Initially its in pending state
const p = new Promise((resolve, reject) => {
    //At this point it start asyn operation which may succeed or fail
    setTimeout(() => {
        // resolve(1);  pending => resolved
        reject(new Error("Something went wrong")) //pending => rejected
    }, 2000)

})

p.then((result) => {
    console.log(result)
}).catch(err => { console.log("Error", err.message) })


//Anywhere we have asynchronous operation that takes a callback we should modify that function that returns a  promise



