// // 13.5.5 Map GeoJSON Linestrings - map of Toronto

// // Create the light view tile layer that will be the default background for map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });   
// // 13.5.6 


// // Add console.log to check to see if code is working
// console.log("working")

// // Create the streets view tile layer that will be the default background for map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create the satellite streets view tile layer that will be an option for map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create a base layer that holds both maps.
// let baseMaps = {
//   "Streets": streets,
//   "Satellite Streets": satelliteStreets
// };

// // Change center of Map to Toronto
// // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [43.7, -79.3],
//   zoom: 11,
//   layers: [satelliteStreets]
// });

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto airline routes GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/cmmgw/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });




// SKILL DRILL
// // 1)  Make the lines blue, with a weight of 1.
// // 2)  Make the polygon fill color yellow.
// // 3)  Add a popup to show each neighborhood.
// // 4)  Make the default map layer Streets with Satellite Streets the second option.


// Add console.log to check to see if code is working
console.log("working")

// Create the streets view tile layer that will be the default background for map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the satellite streets view tile layer that will be an option for map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Change center of Map to Toronto
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/cmmgw/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// // This code is the same as the lines of code under 'Grabbing our GeoJSON data' above except it creates a style to meke the other lines of code easier to read
// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Neighborhood Name: " + feature.properties.AREA_NAME + "</h3>");
  }
})
.addTo(map);
});
