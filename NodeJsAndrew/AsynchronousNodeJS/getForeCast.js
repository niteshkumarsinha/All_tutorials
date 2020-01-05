const request = require('request');
const chalk = require('chalk');
const geoCode = require('./getGeoCode');


const forecast = (longitude, latitude ,  callback) => {   
    const url = 'https://api.darksky.net/forecast/96e2a37e213e801b7eec75034a57dbdb/' + 
                latitude + ',' + longitude + '?units=si';

    request({url: url, json: true}, (err, response) => {
        if(err){
            callback('Unable to connect internet', undefined);
        }else if (response.body.error){
            callback('Coordinates error', undefined);
        }else {
            callback(undefined, response);
        }
    })
}


geoCode('Delhi', (error, data) => {
    if(error) return;
    forecast(data.latitude, data.longitude, (err, response) => {
        if (err) return;
        console.log('Getting Weather Data');
        console.log(chalk.green("-----------------------------"));
        const data = response.body.currently;
        const temperature = data.temperature;
        const chanceOfRain = data.precipProbability;
        const summary = response.body.daily.data[0].summary;
        const output = `${summary} It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain`;
        console.log(chalk.blue.inverse.bold(output));
    });
});
