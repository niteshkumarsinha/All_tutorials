const fs = require("fs");
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
// // fs.readFile("./txt/output.txt", "utf-8", (err, data) => {
// //   console.log("Reading from a async func");
// //   console.log(data);
// // });

// //Blocking Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `Avocado:: ${textIn}`;
// fs.writeFileSync("txt/output.txt", textOut);


// //Non Blocking Asynchronous way
// fs.readFile('./txt/start.txt','utf-8', (err, data1) => {
//     console.log(`data1: ${data1}`);
//     fs.readFile(`./txt/${data1}.txt`, (err, data2) => {
//         fs.writeFile('./txt/append.txt', data2.toString(), 'utf-8' , err => null);
//     });
// });



// console.log('Reading file');
// /////////////////////////////////
//SERVER
// /////////////////////////////////
let count = 0;

// fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8' , (err, data) => {
//     const productData = JSON.parse(data);
// });

const productData = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8');
const productDataObj = JSON.parse(productData);


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html` , 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html` , 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html` , 'utf-8');
 

const server = http.createServer((req, res) => {
    

    const { query, pathname } = url.parse(req.url , true)
    console.log(url.parse(req.url , true));
     
    

    if(pathname === '/overview' || pathname === '/'){
        
        const cardsHtml =  productDataObj.map(el => {
            return replaceTemplate(tempCard, el);
        });
        const overviewHtml = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(overviewHtml);

    }else if (pathname === '/product'){
        
        const productHtml = replaceTemplate(tempProduct, productDataObj[query.id])
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(productHtml);
    }else if(pathname === '/api'){
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(productData);
    }else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page Not Found<h1>')
    }
    count = count + 1;
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has been started and listening to requests on port 8000');
});
