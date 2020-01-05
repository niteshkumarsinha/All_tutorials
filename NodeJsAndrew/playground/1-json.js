const fs = require('fs');


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}


const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);


fs.writeFileSync(`${__dirname}/1-json.json`, bookJSON);
const dataBuffer = fs.readFileSync(`${__dirname}/1-json.json`);
const dataJSON = dataBuffer.toString();
const dataParsed = JSON.parse(dataJSON);

console.log(dataParsed);