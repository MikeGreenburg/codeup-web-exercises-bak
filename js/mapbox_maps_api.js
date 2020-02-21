
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
    center: [-98.484513, 29.423161]//Longitude first and Latitude second

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
