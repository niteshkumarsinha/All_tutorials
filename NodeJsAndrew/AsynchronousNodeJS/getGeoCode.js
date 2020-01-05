const request = require('request');
const chalk = require('chalk');


// request({url: geoCodeUrl, json: true}, (err, response) => {

//     if (err) return "Either no network or bad request";

//     try{
//         console.log('Getting Weather Information');
//         console.log('---------------------------')
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];

//         const url = 'https://api.darksky.net/forecast/96e2a37e213e801b7eec75034a57dbdb/' + 
//                     latitude + ',' + longitude + '?units=si';
//         console.log(`Place Name: ${response.body.features[0].place_name}\n\n`);
//     }catch(e){
//         console.log(e);
//         return 'No Network';
//     }

//     request({url: url, json: true}, (error, response) => {

//         //const data = JSON.parse(response.body);
//         console.log('Getting Weather Data');
//         console.log(chalk.green("-----------------------------"));
//         const data = response.body.currently;
//         const temperature = data.temperature;
//         const chanceOfRain = data.precipProbability;
//         const summary = response.body.daily.data[0].summary;
//         const output = `${summary} It is currently ${temperature} degrees out. There is a ${chanceOfRain}% chance of rain`;

//         console.log(chalk.blue.inverse.bold(output));
//     });
// });


const geoCode = (address, callback) => {
    
    const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmt1bWEyNTUiLCJhIjoiY2p4dzFqbmR5MDB5YzNscGIybW95cWUxbyJ9.598HABS3UiDZ3YO9SxEOPg&limit=1';
    
    request({url: geoCodeUrl, json:true}, (error, response) => {
        
        if(error){
            callback('Unable to connect to location services!', undefined);
        }else if(response.body.features.length === 0){
            callback('Try another search', undefined);
        }else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });    
}

// geoCode('dhanbad', (error, data) => {
//     console.log('Error: ', error);
//     console.log('Data: ', data); 
// });


module.exports = geoCode;