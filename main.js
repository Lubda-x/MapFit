let map = L.map('map').setView([10.6081277,7.4391133], 19); // AFIT location

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