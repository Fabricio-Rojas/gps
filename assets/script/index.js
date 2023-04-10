'use strict';

// Declaring elements

const mapBox = document.querySelector('#map');

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFicmljaW8tdm1yIiwiYSI6ImNsZzVqYW1tejAzZ24zbHFpMGhkbnMxcGgifQ.ZgmrUeDKUeNrVMRtPltK1Q';

let map;
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-95, 40],
    zoom: 3,
    attributionControl: false,
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    doubleClickZoom: false,
});
// Main Function

if (navigator.geolocation) {
    setTimeout(() => {
        mapBox.style.visibility = 'visible';
    }, 5000);
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true,
        showUserHeading: true,
        showAccuracyCircle: false,
    })
    map.addControl(geolocate);
    map.on('load', () => {
        geolocate.trigger();
    })
} else {
    alert('Your browser does not support geolocation');
}

