const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDukoC9iz5xvt-6TDF75FrEaieGau6EHAc`);

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
            let location = resp.data.results[0];
            let coors = location.geometry.location;

            // console.log('Dirección: ', location.formatted_address);
            // console.log('Lat: ', coors.lat);
            // console.log('Lng: ', coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}