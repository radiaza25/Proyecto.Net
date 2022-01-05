let map;
let listaPuntos = new Array();
let coord
let marker;
let watchID;
let geoLoc

function iniciarMap() {
    const coord = { lat: 0.318737, lng: -78.210030};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
       marker = new google.maps.Marker({
        position: coord,
        map,
        title:"Hola Mundo"
    });
    getPosition();
}





function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: Acceso dendgado!");
    } else {
        alert("Error: Acceso dendgado!");
}
}




function getPosition() {
    if (navigator.geolocation) {

        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
   // alert("Latitude : " + latitude + " Longitude: " + longitude);
    console.log("Latitude : " + latitude + " Longitude: " + longitude);
}

function getLocationUpdate() {

    if (navigator.geolocation) {

        // timeout at 60000 milliseconds (6 seconds)
        var options = { timeout: 6000 };
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}

function showLocationOnMap(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    console.log("Latitud: "+ latitud+" Longitud: "+ longitud)
    const coord = { lat: latitud, lng: longitud };
    marker.setPosition(coord);
    map.setCenter(coord)
}









