const axios = require('axios');

const fetchLocation = async (req, res) => 
{
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    res.send({ locality: 'Canning' });

    // try {
    //     const location = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.LOCATION_API_KEY}`);

    //     if (location.data.status === 'OK' && location.data.results.length > 0) 
    //     {
    //         let localityName = null;
    //         for (const result of location.data.results) 
    //         {
    //             for (const component of result.address_components) 
    //             {
    //                 if (component.types.includes('locality')) 
    //                 {
    //                     localityName = component.long_name;
    //                     break;
    //                 }
    //             }
    //             if (localityName) 
    //             {
    //                 break;
    //             }
    //         }

    //         if (localityName) 
    //         {
    //             res.send({ locality: localityName }); // Sending the locality name in the response
    //         } 
    //         else 
    //         {
    //             res.status(404).send({ error: 'Locality not found in address components.' });
    //         }
    //     } 
    //     else 
    //     {
    //     res.status(404).send({ error: 'No results found or API request failed.' });
    //     }
    // } 
    // catch (error) 
    // {
    //     console.error('Error fetching location:', error);
    //     res.status(500).send({ error: 'Internal server error.' });
    // }
};

module.exports = { fetchLocation };
