
//Main map info and set up


var fogoDeChao = [-98.484513, 29.423161];//849 E Commerce St #393, San Antonio, TX 78205
var brasaChicken = [-98.510169, 29.547160];//  8523 Blanco Rd, San Antonio, TX 78216
var texiMexi = [-97.486298, 26.072054];//717 W Ocean Blvd B, Los Fresnos, TX 78566


//Tutorial for marker instance
var favoriteRestList = [
    {
        name: fogoDeChao,
        info: 'Fogo De Chao, 849 E Commerce St #393, San Antonio, TX 78205',
        rating: '5 Stars',
        price: '$$$$',
        img: 'img/FogoDeChao.jpeg'
    },
    {
        name: brasaChicken,
        info: 'Brasa Chicken, 8523 Blanco Road, San Antonio, TX 78216',
        rating: '4 Stars',
        price: '$$',
        img: 'img/brasachicken.jpg'
    },
    {
        name: texiMexi,
        info: 'Texi-Mexi, 717 W Ocean Blvd, Los Fresnos, TX 78566',
        rating: '4 Stars',
        price: '$',
        img: 'img/texi-mexi.jpg'
    }
];

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

// create the popup

// create DOM element for the marker


// create the marker
// new mapboxgl.Marker(el)
//     .setLngLat()
//     .setPopup(popup)
//     .addTo(map);


var restaurantLists = [fogoDeChao, brasaChicken, texiMexi];

favoriteRestList.forEach(function (restaurant, i ) {
    var el = document.createElement('div');
    el.id = 'marker';
    el.style.backgroundImage = 'url(' + restaurant.img + ')';
    var popup = new mapboxgl.Popup({ offset: 25}).setText(
        restaurant.info
    );

    new mapboxgl.Marker(el)
        .setLngLat(restaurant.name)
        .setPopup(popup)
        .addTo(map);
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.

    map.on('load', function() {
// Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

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
        },
        labelLayerId
    );
});


// parameters to ensure the model is georeferenced correctly on the map
var modelOrigin = [-98.484513, 29.423161];
var modelAltitude = 0;
var modelRotate = [Math.PI / 2, 0, 0];

var modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
    modelOrigin,
    modelAltitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
var modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    /* Since our 3D model is in real world meters, a scale transform needs to be
    * applied since the CustomLayerInterface expects units in MercatorCoordinates.
    */
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
};

var THREE = window.THREE;

// configuration of the custom layer for a 3D model per the CustomLayerInterface
var customLayer = {
    id: '3d-model',
    type: 'custom',
    renderingMode: '3d',
    onAdd: function(map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

// create two three.js lights to illuminate the model
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        var directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

// use the three.js GLTF loader to add the 3D model to the three.js scene
        var loader = new THREE.GLTFLoader();
        loader.load(
            'https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf',
            function(gltf) {
                this.scene.add(gltf.scene);
            }.bind(this)
        );
        this.map = map;

// use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
            canvas: map.getCanvas(),
            context: gl,
            antialias: true
        });

        this.renderer.autoClear = false;
    },
    render: function(gl, matrix) {
        var rotationX = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(1, 0, 0),
            modelTransform.rotateX
        );
        var rotationY = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(0, 1, 0),
            modelTransform.rotateY
        );
        var rotationZ = new THREE.Matrix4().makeRotationAxis(
            new THREE.Vector3(0, 0, 1),
            modelTransform.rotateZ
        );

        var m = new THREE.Matrix4().fromArray(matrix);
        var l = new THREE.Matrix4()
            .makeTranslation(
                modelTransform.translateX,
                modelTransform.translateY,
                modelTransform.translateZ
            )
            .scale(
                new THREE.Vector3(
                    modelTransform.scale,
                    -modelTransform.scale,
                    modelTransform.scale
                )
            )
            .multiply(rotationX)
            .multiply(rotationY)
            .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.state.reset();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
    }
};

map.on('style.load', function() {
    map.addLayer(customLayer, 'waterway-label');
});