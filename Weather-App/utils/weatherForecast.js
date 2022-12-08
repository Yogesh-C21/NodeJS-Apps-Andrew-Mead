require('dotenv').config();
const request = require('request');

function weatherInfo(city, callback) {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${city}`;
    request({ url, json: true }, (err, resp) => {
        if (err) {
            callback(err, undefined); // handling low level errors
        } else if(resp.body.success === false){
            callback(resp.body, undefined);
        } else {
            callback(undefined, resp);
        }
    });
}

module.exports = weatherInfo;

