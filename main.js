import LocationSearch from './Libraries/LocationSearch.js';




let searchInput = document.querySelector(".search-location-input")
let searchButton = document.querySelector(".search-button")





let map = L.map('map', {
    zoomControl: false,       // hides the + / - buttons
    scrollWheelZoom: false,   // disables zoom with mouse wheel
    doubleClickZoom: false,   // disables zoom on double click
    touchZoom: false  
            // disables pinch zoom on touchscreens
}).setView([10.6081277,7.4391133], 19); // AFIT location

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);

//   L.marker([10.6081277,7.4391133]).addTo(map)
//     .bindPopup('Yo! AFIT.')
//     .openPopup();



map.locate({ setView: true, maxZoom: 19 });

function getMyLocation(e){

    // The code below gets the users current position
    L.marker(e.latlng).addTo(map)
    .bindPopup("You are here 📍")
        .openPopup();
    // L.circle(e.latlng, e.accuracy).addTo(map);
    let yourCurrentLocation = e.latlng

    
    
    // It is the code below that shows the red line(routing machine stuff...)
    L.Routing.control({
    waypoints: [
        L.latLng(yourCurrentLocation.lat,yourCurrentLocation.lng), // Start: AFIT Main Gate
        L.latLng(10.60991566108269, 7.441094861908177)  // End: Some building in AFIT
    ],
        routeWhileDragging: true
    }).addTo(map);



    //The code below resets the zoom level caused by the routing machine.
    map.setMinZoom(19);
    map.setMaxZoom(19);

    

}

map.on('locationfound', getMyLocation)


console.log(getMyLocation())

map.on('locationerror', function() {
    alert("Location access denied or unavailable.");
});



// THis block of code removes the zoom in button
let zoomInOut = document.querySelector('.leaflet-top')
// let attribution1 = document.querySelector('.leaflet-bottom')
zoomInOut.style.display = 'none'
// attribution1.style.display = 'none'











const students = [
  { location: "IBRAHIM ALFA AUDITORIUM", LongLat: "10.609014371704705, 7.443786455522318" },
  { location: "AFIT LIBRARY HALL", LongLat: "10.609921651599837, 7.442001640468107" },
  { location: "Yisa Doko Hall", LongLat: "10.608514640537026, 7.4419716093943595" },
];

const searcher = new LocationSearch(students, ["location", "LongLat"]);

let result = searcher.search("Hall")


console.log(result);

searchButton.addEventListener('click', e=>{
    console.log(searchInput.value)
    
})









