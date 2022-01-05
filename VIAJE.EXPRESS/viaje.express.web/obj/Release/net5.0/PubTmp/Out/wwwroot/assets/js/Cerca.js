let map;
let coord = { lat: 0.318545, lng: -79.2100845 };
let marker;
var car = "/images/auto.png";
let icono;
let cameraOptions
let listen
let cerca = new Array();
var poligono;
let markers = [];
let nombreCerca;
function iniciarMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });

    poligono = new google.maps.Polygon({
        path: cerca,
        map: map,
        strokeColor: 'rgb(255, 0, 0)',
        fillColor: 'rgb(255, 255, 0)',
        strokeWeight: 4,
    });

    var circle = new google.maps.Circle({
        map: map,
        center: new google.maps.LatLng(0.3184833, -78.2100476),
        radius:80
    })

    var circle2 = new google.maps.Circle({
        map: map,
        center: new google.maps.LatLng(0.362384, -78.191308),
        radius: 80
    })

    var circle3 = new google.maps.Circle({
        map: map,
        center: new google.maps.LatLng(0.321869, -
            78.209348),
        radius: 80
    })
   
}

function crearCerca() {

    google.maps.event.addListener(map, 'click', function (e) {
        placeMarker(e.latLng, map);
    });

}

function placeMarker(position, map) {


    addMarker(position);
    cerca.push(position);

        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
     crearPoligono();
}

function crearPoligono() {
    poligono.setPath(cerca);
 
}

function retrocederCerca() {
   cerca.pop();
  
    poligono.setPath(cerca);
    deleteMarkers();
}

function abc() {

    var o = []

    o.push({ lat: 0.3184833, lng: -78.2100476 })
    o.push({ lat: 0.318291, lng: - 78.209756})
    o.push({ lat: 0.318516, lng: -78.210067 })
    o.push({ lat: 0.318518, lng: -78.210058 })
    o.push({ lat: 0.318516, lng: -78.210048 })
    o.push({ lat: 0.31848, lng: -78.210043 })
    o.push({ lat: 0.318505, lng: -78.210075 })
    o.push({ lat: 0.31828, lng: -78.210218 })
    o.push({ lat: 0.318523, lng: -78.210057 })
    o.push({ lat: 0.321869, lng: -78.209348 })
    o.push({ lat: 0.362384, lng: -78.191308 })
    o.push({ lat: 0.3185, lng: -78.210042 })
    o.push({ lat: 0.318502, lng: -78.210042 })
    o.push({ lat: 0.318502, lng: -78.210042 })
    o.push({ lat: 0.318498, lng: -78.21005 })
    o.push({ lat: 0.318498, lng: -78.210052 })
    o.push({ lat: 0.318499, lng: -78.210053 })

    o.forEach(function (element) {
        var r = element;
        const coord = element;
        marker = new google.maps.Marker({
            position: coord,
            map,
        });
    })

    var r = []
    r.push({ lat: 0.31847409, lng: 78.21004337 })
    r.push({ lat: 0.362384, lng: 78.191308 })

    r.push({ lat: 0.321869, lng: 78.209348})


    const data = {
 
        newyork: {
            center: { lat: 0.31847409, lng: 78.21004337 },
            population: 8405837,
        },
        losangeles: {
            center: {lat: 0.362384, lng: 78.191308 },
            population: 3857799,
        },
        vancouver: {
            center: { lat: 0.321869, lng: 78.209348 },
            population: 603502,
        },
    };


  


}








function deleteMarkers() {
   
        markers[markers.length-1].setMap(null);
    markers.pop();
   


}

function setMapOnAll() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


function addMarker(position) {
    const marker = new google.maps.Marker({
        position,
        map,
    });
    markers.push(marker);
}




function guardarCerca() {
 

    var vd = {

        "cercaId": {},
        "cercaNombre": "Prueba",
        "cercaDescripcion": "Prueba de Post",
        "cercaPuntos": [],
        "createdAt": "2021-08-17T20:54:16.816Z",
        "createdBy": 0,
        "modifiedAt": "2021-08-17T20:54:16.816Z",
        "modifiedBy": 0,
        "deletedAt": "2021-08-17T20:54:16.816Z",
        "deletedBy": 0




    };

    var f = [];

    for (let i = 0; i < cerca.length; i++) {
        var m = cerca[i].toJSON()
        f.push({ Latitud: m.lat, Longitud:m.lng });
    }
    var vd = {

        "cercaId": {},
        "cercaNombre": "Prueba",
        "cercaDescripcion": "Prueba de Post",
        "cercaPuntos": f,
        "createdAt": "2021-08-17T20:54:16.816Z",
        "createdBy": 0,
        "modifiedAt": "2021-08-17T20:54:16.816Z",
        "modifiedBy": 0,
        "deletedAt": "2021-08-17T20:54:16.816Z",
        "deletedBy": 0




    };
    var vr = vd;


    fetch('https://apptaxis2.azurewebsites.net/Cerca', {
        method: 'POST',
        body: JSON.stringify({

            "cercaId": {},
            "cercaNombre": document.getElementById("nombre").value,
            "cercaDescripcion": document.getElementById("descripcion").value,
            "cercaPuntos": f,
            "createdAt": "2021-08-17T20:54:16.816Z",
            "createdBy": 0,
            "modifiedAt": "2021-08-17T20:54:16.816Z",
            "modifiedBy": 0,
            "deletedAt": "2021-08-17T20:54:16.816Z",
            "deletedBy": 0


        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(function () {

      a = 1;
    });


}





function cargarCerca() {

    var contenido = document.querySelector('#contenido')
    //obtenerlo ingresando el id de la persona y el rol
    fetch('https://apptaxis2.azurewebsites.net/Cerca')
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (data) {
            data.forEach(function (element) {

                var mes;
                var dia;

                var carrera = JSON.stringify(element.carrera)
                var objFech = new Date(element.createdAt);

                var dia = objFech.getUTCDate();

                if ((objFech.getUTCMonth() + 1) < 10) {
                    mes = "0" + (objFech.getUTCMonth() + 1);
                } else {
                    mes = (objFech.getUTCMonth() + 1);
                }
                var anio = objFech.getUTCFullYear();

                $("#contenido").append($("<tr id='" + element.cercaNombre + "'>" +

                    " <th scope=row>" + element.cercaNombre + "</th>" +

                    "<td>" + element.cercaDescripcion + "</td>" +
                    "<td>" + anio + "/" + mes + "/" + dia + "</td>" +
                 

                    "<td>" +
                    "<button type='button' id='buscarChofer' value='" + element.cercaNombre + "' onclick='buscarCerca(this)'>Modificar</button>" + "</td > " +

                    "<td>" +
                    "<button type='button' id='eliminar' value='" + element.cercaNombre + "' onclick='eliminarC(this)'>Eliminar</button>" + "</td > " +

                    "</tr >"

                ));


                //// var k = p.toHexString();
                // var m = JSON.parse(r);
            })
        })
}

function buscarCerca(nombre) {
    var m = document.getElementById('cambiar').disabled = false;
    var m = document.getElementById('guardar').disabled = true;

    nombreCerca =nombre.value
    fetch('https://apptaxis2.azurewebsites.net/Cerca/1/2/' + nombre.value)
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (data) {
       
            document.getElementById("nombre").value = data.cercaNombre
            document.getElementById("descripcion").value = data.cercaDescripcion
            arr = []
            lis=[]
            lis = data.cercaPuntos;
            for (indice in lis)  {
                var v = Object.values(lis[indice]);
                var m= { lat: v[1], lng: v[2]}
                arr.push(m);
            }
            observarRuta(arr)
            var a = 1
        })

}


function modificarCerca() {
    var f = [];
  
    for (let i = 0; i < cerca.length; i++) {
        var m = cerca[i].toJSON()
        f.push({ Latitud: m.lat, Longitud: m.lng });
    }

   
    var p = nombreCerca;
    fetch('https://apptaxis2.azurewebsites.net/Cerca/' + nombreCerca, {
  
        method: 'PUT',
        body: JSON.stringify({

            "cercaId": {},
            "cercaNombre": document.getElementById("nombre").value,
            "cercaDescripcion": document.getElementById("descripcion").value,
            "cercaPuntos": f,
            "createdAt": "2021-08-17T20:54:16.816Z",
            "createdBy": 0,
            "modifiedAt": "2021-08-17T20:54:16.816Z",
            "modifiedBy": 0,
            "deletedAt": "2021-08-17T20:54:16.816Z",
            "deletedBy": 0

        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(r => {
        var a = 1
        alert("Se han guardado los cambios")
        location.href = 'Index';
        var m = document.getElementById('guardar').disabled = false;



    }).catch(error => alert("Error al actualizar el Vehículo"))
}






function eliminarC(nombre) {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
        var a=nombre.value

        fetch('https://apptaxis2.azurewebsites.net/Cerca/' + nombre.value, {

            method: 'DELETE',
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(r => {
            alert("Se ha eliminado la cerca")
            eliminar(nombre.value);

        });
    } else {
        mensaje = "Has clickado Cancelar";

    }
    document.getElementById("ejemplo").innerHTML = mensaje;

} function eliminar(i) {
    var table = document.getElementById(i);
    table.innerHTML = "";
}




function observarRuta(carrera) {
    var verticesLinea = []
    //var b = JSON.parse(a);

    poligono.setPath(carrera);



}