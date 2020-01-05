const path = require('path');
const express = require('express');


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

//Customize server
app.use(express.static(publicDirectoryPath));


// app.get('', (req, res) => {
//     res.send('<h1>Hello Express</h1>');
// });

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Nitesh',
//         age: 28
//         },{
//             name: 'ciera',
//             age: 29
//         }
//     ]);
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About Page</h1>');
// });

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'warm temperature through the day',
        location: 'Bengaluru, Karnataka'
    });
})

app.listen(8000, () => {
    console.log('Server is listening on Port 8000');
});
