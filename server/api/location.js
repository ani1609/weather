const axios = require('axios');

const fetchLocation = async ({ query: { latitude, longitude } }, res) => {
    try {
        const location = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.LOCATION_API_KEY}`);
        const city = location.data.results[0].components.city;
        res.json({ city }); // Send the city name as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Invalid Coordinates.' });
    }
};

module.exports = fetchLocation;
