//Object Property Shorthand
const name = 'Andrew' ;
const userAge = 29;

const user = {
    name,
    userAge,
    location: 'Philadelphia'
}

console.log(user);


//Object Destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, stock, rating = '5 star'} = product;

console.log(productLabel, stock, rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);