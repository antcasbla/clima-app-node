const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=da164aa3d1de1d61029990d1286ddedd`);

    if(resp.code === 400){
        throw new Error(`No hay resultados para las coordenadas introducidas: (${lat}, ${lng})`);
    }

    // console.log('Lat: ', lat);
    // console.log('Lng: ', lng);
    // console.log('Temperatura: ', resp.data.main.temp);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}