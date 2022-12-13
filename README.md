## Mapbox API

implementing mapboxGL API to create a GPS-style application. 

`geolocation` is used to manually get the coordinate data from the web browser, and inputs it into the `map.flyTo({})` method.

Automatic updating is triggered via promise callback with a combination of `setInterval` and `setTimeout`

You may move the map around, but it will snap back to center every time the promise is called. This prevents 'losing' yourself on the map. 

A simple map application like this could be updated to track walking routes or bicycle trips. 