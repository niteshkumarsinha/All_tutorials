const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/96e2a37e213e801b7eec75034a57dbdb/37.8267,-122.4233?units=si';


//async function
request({url: url, json: true}, (error, response) => {

    //const data = JSON.parse(response.body);
    console.log('Getting Weather Data');
    console.log(chalk.green("-----------------------------"));
    const data = response.body.currently;
    const temperature = data.temperature;
    const chanceOfRain = data.precipProbability;
    const summary = response.body.daily.data[0].summary;
    const output = `${summary} It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain`;

    console.log(chalk.blue.inverse.bold(output));
})


const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmt1bWEyNTUiLCJhIjoiY2p4dzFqbmR5MDB5YzNscGIybW95cWUxbyJ9.598HABS3UiDZ3YO9SxEOPg&limit=1';

request({url: geoCodeUrl, json: true}, (err, response) => {
    console.log('Getting GeoCodes');
    console.log('----------------')
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];

    console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
    
});

