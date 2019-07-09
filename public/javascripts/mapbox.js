document.addEventListener('DOMContentLoaded', () => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZ2VtdHoiLCJhIjoiY2p4bTJjcmdpMGNnZDNubXUya2hrMWh6cCJ9.75ax8N9lxMUC9r_dZsPOEg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.1269, 19.4978],
        zoom: 4
    })

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })

    map.addControl(geocoder)

    geocoder.on('result', ({
        result: {
            center
        }
    }) => {
        document.querySelector('#lng').value = center[0]
        document.querySelector('#lat').value = center[1]

    })

}, false);