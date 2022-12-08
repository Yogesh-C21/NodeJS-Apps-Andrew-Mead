require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const weatherInfo = require('./utils/weatherForecast');

const app = express();

const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index', { title: 'Weather' });
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ error: 'please provide address' });
    }
    weatherInfo(req.query.address, (error, resp) => {
        if (error) {
            return res.send({ error });
        } else {
            const {
                location: {
                    lat: latitude,
                    lon: longitude,
                    name,
                    country,
                    region,
                },
                current: {
                    weather_descriptions: [weather],
                },
            } = resp.body;
            const respObj = {
                latitude, longitude, name, country, region, weather
            };
            res.send(respObj);
        }
    });
});

app.get('/about', (req, res) => {
    console.log(req);
    res.render('about', { title: 'About' });
});

app.get('/help', (req, res) => {
    res.render('help', { title: 'Help' });
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(process.env.PORT, () => {
    console.log('Successfully connected to port');
});
