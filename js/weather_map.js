"use strict";
$(document).ready(function() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey + "/29.4241,-98.4936");
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/39fcbf9abb9b85b22991f38b945d8297/29.423161,-98.484513").done(function(data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));
    });


    //Main map
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 14,
        pitch: 45,
        bearing: -17.6,
        center: [-98.484513, 29.423161],//Longitude first and Latitude second
        antialias: true

    });

    map.addLayer(
        {
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
            }
        })
});