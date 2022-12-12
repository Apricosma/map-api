// draw map
mapboxgl.accessToken = 'pk.eyJ1IjoiYXByaWNvc21hIiwiYSI6ImNsYmdycGZ6cTBjajAzb29jZG5uOXdzcjAifQ.wfKMtVA5wdqV2F8rdDLkhA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/apricosma/clbkza42n000m14ofsd3qt653', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 5,
    projection: 'globe'
});

const marker = new mapboxgl.Marker()
    .setLngLat([-97.13, 49.89])
    .addTo(map);


const getLocation = () => new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
        position => {
            const location = [
                long = position.coords.longitude,
                lat = position.coords.latitude 
            ];
            marker.setLngLat([long, lat])
            resolve(location);
        },
        err => reject(err)
    );
})

getLocation()
    .then(location => map.flyTo({
        center: location,
        essential: true
    }))
    .then(map.setZoom(11))
    .catch(error => console.log('Geolocation encountered an error'));

// function getLocation(position) {
//     const { latitude, longitude } = position.coords; 
//     console.log([longitude, latitude]);
//     userPosition = [longitude, latitude];
//     return userPosition;
// }

// // getCurrentPosition() passes a 'PositionError' object to its 'failure' callback
// function errorHandler(error) {
//     console.log(error.message);
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         getLocation,
//         errorHandler,
//         { enableHighAccuracy: true }
//     );
// } else {
//     console.log('Geolocation is not supported by your browser');
// }


// const geolocate = new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true,
//     showUserHeading: true
// })

// map.addControl(geolocate)

// geolocate.on('error', () => {
//     console.log(`Geolocation has encountered an error`);
// })

// map.on('load', () => {
//     geolocate.trigger()
// })