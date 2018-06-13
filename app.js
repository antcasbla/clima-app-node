const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${direccion} es de ${temp}`;
    }catch (e) {
        return `No se pudo concatenar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp =>{
//         console.log(resp);
//     })
//     .catch(e => console.log(e));
//
//
// clima.getClima(40.4167754, -3.7037902)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));



//console.log(argv.direccion);

// let encodeUrl = encodeURI(argv.direccion);
//
// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDukoC9iz5xvt-6TDF75FrEaieGau6EHAc`)
//     .then(resp => {
//
//         let location = resp.data.results[0];
//         let coors = location.geometry.location;
//
//         console.log('Dirección: ', location.formatted_address);
//         console.log('Lat: ', coors.lat);
//         console.log('Lng: ', coors.lng);
//
//         //console.log(resp.data);
//         //JSON.stringify => para ponerlo en JSON más extendido
//         //console.log(JSON.stringify(resp.data, undefined, 2));
//         console.log(resp.status);
//     })
//     .catch(e => console.log('ERROR!!!', e));