var mapboxToken = "pk.eyJ1IjoiY2xrMzIwcmFjZXIiLCJhIjoiY2s2dHRyNmt2MDFkNjNvczJkc3NyM3p6eSJ9.G_EkcB-0AlVOaSIzDnhptQ"; // has to be in a string!!

//DARKSKY.NET//
var darkSkyKey = "39fcbf9abb9b85b22991f38b945d8297";

//go step by step break into pieces
//1st take a look at what you get from the api call (request)
//display the weather info for one day
//then look into getting the map involved via mapbox
//get weather map communicate with mapbox to input the weather where icon is set on the map
//make a dragable icon to grab the location and weather from icons final position
//make a text input where customizable locations can be input

//can use mapquest API for the geolocator (is built off of the mapbox API)

//copy link to html file <script src="js/keys.js"></script>

//<script>
//  $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/API_KEY_HERE/29.4241,-98.4936");"https://api.darksky.net/forecast/39fcbf9abb9b85b22991f38b945d8297/37.8267,-122.4233" + darkskykey + "/lat long).done(function(data){
//  console.log(data);
//}
//<script>
//daily is where you want to be looking into the data property (0 = current weather)