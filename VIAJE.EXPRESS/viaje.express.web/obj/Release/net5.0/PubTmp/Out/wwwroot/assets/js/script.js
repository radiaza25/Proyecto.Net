let map;
let coord = { lat: 0.318545, lng: -79.2100845 };
let marker;
var car = "/images/auto.png";
let icono;
let cameraOptions
0.318976, -78.210387

function abc() {
 var i=3
}
function listaMarcador() {

    var o = []

    o.push([0, 1, 0.3184833, -78.2100476])
    o.push([1, 2, 0.318291, -78.209756])
    o.push([2, 3, 0.318516, -78.210067])
    o.push([3, 4, 0.318518, -78.210058])
    o.push([4, 5, 0.318516, -78.210048])
    o.push([5, 6, 0.31848, -78.210043])
    o.push([6, 7, 0.318505, -78.210075])
    o.push([7, 8, 0.31828, -78.210218])
    o.push([8, 9, 0.318523, -78.210057])
    o.push([9, 10, 0.321869, -78.209348])
    o.push([10, 11, 0.362384, -78.191308])
    o.push([11, 12, 0.3185, -78.210042])
    o.push([12, 13, 0.318502, -78.210042])
    o.push([13, 14, 0.318502, -78.210042])
    o.push([14, 15, 0.318498, -78.21005])
    o.push([15, 16, 0.318498, -78.210052])
    o.push([16, 17, 0.318499, -78.210053])

    for (var i in o) {
        const coord = { lat: i[2], lng: i[3] };
        marker = new google.maps.Marker({
            position: coord,
            map,
        });
    }

}


function iniciarMap() {
      map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      center: coord
      });


     icono =
    {
        path: "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z",
        scale: 0.5,
        strokeWeight: 2,
        fillColor: "#009933",
        fillOpacity: 1,
        rotation: 0,
        anchor: new google.maps.Point(0, 2)
    };

     marker = new google.maps.Marker({
        position: coord,
        icon:icono,
        map: map,
    });


    
}


function cambiarRuta() {
    const select = document.querySelector("#contenido");
        const indice = select.selectedIndex;
    const opcionSeleccionada = select.options[indice];
    var usuario = opcionSeleccionada.value;
    cargarRecorrido(usuario);
}

function modificarActivo(cedula) {

    var a = 1;
    fetch('https://apptaxis2.azurewebsites.net/Usuario/2/' + cedula.value, {

        method: 'PUT',
        body: JSON.stringify({
            "activo": 2,


        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(function (data) {

        var a = 2;
        BorrarTabla("#contenido");
        cargar();

    });




}
function cargar() {
    var a = 1;
    var contenido = document.querySelector('#contenido')
    
    //obtenerlo ingresando el id de la persona y el rol
    fetch('https://apptaxis2.azurewebsites.net/Usuario')
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (data) {
            data.forEach(function (element) {
                var opcion
                if (element.activo == 0) {
                    opcion = "<td>inactivo</td>" +

                        "<td>" +
                        "<button type='button' id='modificar' value='" + element.cedula + "' onclick='modificarActivo(this)'>Solicitar</button>" + "</td > " + "<td>" +
                        "<button type='button' id='eliminar' value='" + element.cedula + "' onclick='cargarRecorrido(this)'>ver rutas</button>" + "</td > "

                } else if (element.activo == 2) {

                    opcion = "<td>Pendiente</td>" +

                        "<td>" +
                        "<button type='button' id='modificar' value='" + element.cedula + "' onclick=''>Solicitado</button>" + "</td > " + "<td>" +
                        "<button type='button' id='eliminar' value='" + element.cedula + "' onclick='cargarRecorrido(this)'>ver rutas</button>" + "</td > "



                } else if (element.activo == 1) {
                    opcion = "<td>Activo</td>" +
                        "<td>" +
                        "<button type='button' id='visualizar' value='" + element.cedula + "' onclick='" + 'setInterval("seguirAuto()", 500);cambiarIcono();' + "'><span id='icono' class='fas fa-eye-slash'></span></button>" + "</td > " + "<td>" +
                                                                                        
                        "<button type='button' id='eliminar' value='" + element.cedula + "' onclick='cargarRecorrido(this)'>ver rutas</button>" + "</td > "

                }

                $("#contenido").append($("<tr id='" + element.idUsuario + "'>" +
                    " <th scope=row>" + element.nombre + " " + element.apellido + "</th>" +

                 
                    "<td>" + element.cedula + "</td>" +

                    
                    "<td>" + opcion+ "</td>" +

    
                    "</tr >"

                ));
            })
        })
}



function cargarRecorrido(usuario) {
    var a = 1;
    var contenido = document.querySelector('#contenidoRecorrido')
    BorrarTabla("#contenidoRecorrido");
    //obtenerlo ingresando el id de la persona y el rol
    fetch('https://apptaxis2.azurewebsites.net//Carrera/' + usuario.value)
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
                var objFech = new Date(element.createAt);

                var dia = objFech.getUTCDate();
               
                if ((objFech.getUTCMonth() + 1) < 10) {
                    mes = "0" + (objFech.getUTCMonth() + 1);
                } else {
                    mes = (objFech.getUTCMonth() + 1);
                }
                var anio = objFech.getUTCFullYear();



                $("#contenidoRecorrido").append($("<tr id='" + element.carreraId + "'>" +
                    " <th scope=row>" + anio+"/" +mes+"/"+dia+ "</th>" +
                    "<td>" + element.kilometro.toFixed(2) +"Km"+ "</td>" +
                    "<td>" +
                    "<button type='button'  class='button-add'   id='modificar' value='" + carrera + "' onclick='observarRuta(this)'><span class='fas fa-road'></span></button>" + "</td > " +
                    "<button type='button'  class='button-add'   id='modificar' value='" + carrera + "' onclick='observarRuta(this)'><span class='fas fa-road'></span></button>" + "</td > " +





                    "</tr >"

                ));
            })
        })
}



function BorrarTabla(tabla){
    const elemento = document.querySelector(tabla);
    elemento.innerHTML = "";
 }

function cambiarIcono() {
    //document.getElementById('visualizar').addEventListener('click', function () {
        var icon = document.getElementById('icono');
        icon.classList.toggle('fa-eye-slash');
        icon.classList.toggle('fa-eye');
   // })
}

function seguirAuto() {
    
    var a = 1;
    fetch('https://flespi.io/gw/devices/2204321/messages', {

        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': 'FlespiToken ' + "00373P8oA5gngylXvcxMmPICEBbcs9ZiZSdQvc3V599cwiXRkltvY0VqpUsHUhQH"
        }
    })
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (data) {
            var a = data.result.pop();
            var c = a["position.latitude"];
            var t = a["position.direction"];
            var coord = { lat: parseFloat(c), lng: parseFloat(a["position.longitude"]) };
                icono =
                {
                    path: "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z",
                    scale: 0.5,
                    fillColor: "#009933",
                    fillOpacity: 1,
                    rotation: 45,
                };


              marker.setPosition(coord);
            icono.rotation = t;
                marker.setIcon(icono);
                map.setCenter(coord);
           
               // map.setTilt(90);
            

        })
  
}



function observarRuta(carrera) {
    var verticesLinea=[]
    var a = carrera.value;
    var b = JSON.parse(a);

    b.forEach(function (element) {
        verticesLinea.push({ lat: element.latitud, lng: element.longitud })
    })
  

    var linea = new google.maps.Polyline({
        path: verticesLinea,
        map: map,
        strokeColor: 'rgb(255, 0, 0)',
        strokeWeight: 2
    });
    
}




