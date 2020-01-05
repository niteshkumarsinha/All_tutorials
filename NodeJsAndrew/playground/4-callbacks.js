const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}


add(5,6 , (sum) => {
    console.log(sum);
})


const multiply = (a, b , mult) => {
    setTimeout(() => {
        mult(a*b);
    }, 2000)
};


multiply(5, 7 , (result) => {
    console.log(result);
});

