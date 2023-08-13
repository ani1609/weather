const express = require('express');
const cors = require('cors');
const {fetchWeather} = require('./controllers/weatherController');



const app = express();
const port = 3000;

app.use(cors());

app.get('/api/weather', fetchWeather);

app.listen(port, () => 
{
    console.log(`server is listening on port ${port}`);
});

