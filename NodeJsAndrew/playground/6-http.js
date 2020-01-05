const https = require('https');


const url = 'https://api.darksky.net/forecast/96e2a37e213e801b7eec75034a57dbdb/37.8267,-122.4233?units=si';


const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
        
    });
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
        
    });
})

request.on('error', (error) => {
    console.log(error);
});

request.end();