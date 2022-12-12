// draw map
mapboxgl.accessToken = 'pk.eyJ1IjoiYXByaWNvc21hIiwiYSI6ImNsYmdycGZ6cTBjajAzb29jZG5uOXdzcjAifQ.wfKMtVA5wdqV2F8rdDLkhA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/apricosma/clbkza42n000m14ofsd3qt653', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 5,
    projection: 'globe'
});

// create marker
const marker = new mapboxgl.Marker()
    .setLngLat([-97.13, 49.89]) // default marker position
    .addTo(map);


const getLocation = () => new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
        position => {
            const location = [
                long = position.coords.longitude,
                lat = position.coords.latitude 
            ];
            marker.setLngLat([long, lat]) // sets marker to user location
            console.log([long, lat]);
            resolve(location);
        },
        err => reject(err)
    );
})

let wait = ms => new Promise(
    r => setTimeout(r, ms)
);

let repeat = (ms, func) => new Promise(
    r => (
        setInterval(func, ms),
        wait(ms).then(r)
    )
);

repeat(1000, () => Promise.all([getLocation()]))
    .then(location => map.flyTo({
        center: location,
        essential: true
    }))
    .then(map.setZoom(11))
    // .catch(error => console.log('Geolocation encountered an error'));

// getLocation()
    

// getLocation()
//     .then(location => map.flyTo({
//         center: location,
//         essential: true
//     }))
//     .then(map.setZoom(11))
//     .catch(error => console.log('Geolocation encountered an error'));