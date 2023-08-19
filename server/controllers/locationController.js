const axios = require('axios');

const fetchLocation = async (req, res) => 
{
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    try 
    {
        // const location = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.LOCATION_API_KEY}`);
        // const city = location.data.results[0].components.city;
        res.send({city:"Canning"});
    } 
    catch (error) 
    {
        res.status(500).send({ error: 'Invalid Coordinates.' });
    }
};

module.exports = { fetchLocation };
