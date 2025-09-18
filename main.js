


let searchInput = document.querySelector(".search-location-input")
let searchButton = document.querySelector(".search-button")




const r = new rive.Rive({
    src: 'mapfit.riv',
    canvas: document.getElementById('riveCanvas'),
    // layout: layout,
    autoplay: true,
    animations: ["Welcome animate",
         "MpaFit Text animation",   
            `"To"`,
            "pin",
            "Lines",
            "Button"        
    ],
    stateMachines: "State Machine 1",

    onLoad: () => {
      computeSize();
    },

});




function computeSize() {
    r.resizeDrawingSurfaceToCanvas();
  }



// Subscribe to window size changes and update call `resizeDrawingSurfaceToCanvas`
window.onresize = computeSize;

// Subscribe to devicePixelRatio changes and call `resizeDrawingSurfaceToCanvas`
window
.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
.addEventListener("change", computeSize);

// Update the layout
r.layout = new rive.Layout({ fit: rive.Fit.Layout });



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
var marker;

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // If marker doesn't exist, create it
            if (!marker) {
                marker = L.marker([lat, lng]).addTo(map)
                    .bindPopup("You are here 📍").openPopup();
                map.setView([lat, lng], 19); // zoom to location



                // The code below is to detect if the user is outsied AFIT
                const userPoint = turf.point([lat, lng]);
                const campusPoly = turf.polygon([[
                [10.60809, 7.43827],
                [10.6058, 7.44575],
                [10.61398, 7.45975],
                [10.62093, 7.44612],
                [10.61518, 7.43693],
                [10.60809, 7.43827]
                ]]);

                if (turf.booleanPointInPolygon(userPoint, campusPoly)) {
                console.log("User is inside AFIT");
                } else {
                console.log("User is outside AFIT");
                }


            } else {
                marker.setLatLng([lat, lng]); // move marker
                map.setView([lat, lng], 19)
            }

        },
        function (error) {
            alert("Unable to retrieve location");
        },
        {
            enableHighAccuracy: true, // use GPS if available
            maximumAge: 0
        }
        
    );
} else {
    alert("Geolocation is not supported by your browser.");

    



}













// THis block of code removes the zoom in button
let zoomInOut = document.querySelector('.leaflet-top')
// let attribution1 = document.querySelector('.leaflet-bottom')
zoomInOut.style.display = 'none'
// attribution1.style.display = 'none'


let attributionWaterMark = document.querySelector('.leaflet-control-attribution');
attributionWaterMark.style.display = 'none';











// const students = [
//   { location: "IBRAHIM ALFA AUDITORIUM", LongLat: "10.609014371704705, 7.443786455522318" },
//   { location: "AFIT LIBRARY HALL", LongLat: "10.609921651599837, 7.442001640468107" },
//   { location: "Yisa Doko Hall", LongLat: "10.608514640537026, 7.4419716093943595" },
// ];

// const searcher = new LocationSearch(students, ["location", "LongLat"]);

// let result = searcher.search("Hall")


// console.log(result);

// searchButton.addEventListener('click', e=>{
//     console.log(searchInput.value)
    
// })









