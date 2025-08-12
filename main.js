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

  L.marker([10.6081277,7.4391133]).addTo(map)
    .bindPopup('Yo! AFIT.')
    .openPopup();


// THis block of code removes the zoom in button
let zoomInOut = document.querySelector('.leaflet-top')
// let attribution1 = document.querySelector('.leaflet-bottom')
zoomInOut.style.display = 'none'
// attribution1.style.display = 'none'


L.Routing.control({
    waypoints: [
        L.latLng(10.6081277,7.4391133), // Start: AFIT Main Gate
        L.latLng(10.609877148454233, 7.441088525045217)  // End: Some building in AFIT
    ],
    routeWhileDragging: true
}).addTo(map);

// map.setMinZoom(19);
// map.setMaxZoom(19);
