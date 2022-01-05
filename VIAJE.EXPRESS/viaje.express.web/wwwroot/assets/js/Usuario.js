
var nombre="";
const { ObjectId } = require('mongodb').ObjectId;

    function eliminar(i) {
        var table = document.getElementById(i);
        table.innerHTML = "";
    }

function cargar() {
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
                
                if (element.rol == 2) {

                    $("#contenido").append($("<tr id='" + element.cedula + "'>" +

                        " <th scope=row>" + element.nombre + "</th>" +

                        "<td>" + element.apellido + "</td>" +
                        "<td>" + element.cedula + "</td>" +
                        "<td>" + element.pass + "</td>" +

                        "<td>" +
                        "<button type='button' id='buscarChofer' value='" + element.cedula + "' onclick='buscarU(this)'>Modificar</button>" + "</td > " +

                        "<td>" +
                        "<button type='button' id='eliminar' value='" + element.cedula + "' onclick='eliminarU(this)'>Eliminar</button>" + "</td > " +

                        "</tr >"

                    ));
               }
               
               //// var k = p.toHexString();
               // var m = JSON.parse(r);
            })
        })
}

function agregarUsuario() {
    fetch('https://apptaxis2.azurewebsites.net/Usuario', {

        method: 'POST',
        body: JSON.stringify({
            "nombre": document.getElementById("nombre").value,
            "apellido": document.getElementById("apellido").value,
            "cedula": document.getElementById("cedula").value,
            "rol": 2,
            "pass": document.getElementById("contra").value,
            "activo": 0,
            "createdAt": "2021-07-22T19:58:11.516Z",
            "createdBy": 1,
 
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(r => {
        var a = 1
        alert("Se ha creado un nuevo usuario")
        location.href = 'Index';
    }).catch(error => alert("Error al actualizar el Vehículo"))

}


function buscarU(cedula) {

    //obtenerlo ingresando el id de la persona y el rol
    var cedu = cedula.value
    fetch('https://apptaxis2.azurewebsites.net/Usuario/' + cedula.value)
        .then(function (result) {
            if (result.ok) {
                return result.json();
            }
        })
        .then(function (data) {
            sessionStorage.setItem('nombre', data.nombre);
            sessionStorage.setItem('apellido', data.apellido);
            sessionStorage.setItem('cedula', data.cedula);
            sessionStorage.setItem('pass', data.pass);

            location.href = 'Modificar';
           // document.getElementById("nombre").value = nombre
            var a=1     
        })
}





function pasarDatos() {
    document.getElementById("nombre").value = sessionStorage.getItem('nombre');
    document.getElementById("apellido").value = sessionStorage.getItem('apellido');
    document.getElementById("cedula").value = sessionStorage.getItem('cedula');
    document.getElementById("contra").value = sessionStorage.getItem('pass');
    sessionStorage.removeItem('apellido')
    sessionStorage.removeItem('nombre')
    sessionStorage.removeItem('pass')


}
function eliminarU(cedula) {
    var mensaje;
        var opcion = confirm("Clicka en Aceptar o Cancelar");
        if (opcion == true) {
            mensaje = "Has clickado OK";
        

    fetch('https://apptaxis2.azurewebsites.net/Usuario/1/' + cedula.value, {

        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(r => {
        alert("Se ha eliminado el usuario")
        eliminar(cedula.value);
 
    });
    } else {
            mensaje = "Has clickado Cancelar";
          
    }
    document.getElementById("ejemplo").innerHTML = mensaje;

}

function modificarUsu() {
    fetch('https://apptaxis2.azurewebsites.net/Usuario/2/3/' + sessionStorage.getItem('cedula'), {

        method: 'PUT',
        body: JSON.stringify({
            "nombre": document.getElementById("nombre").value,
            "apellido": document.getElementById("apellido").value,
            "cedula": document.getElementById("cedula").value,
            "pass": document.getElementById("contra").value,
            "activo": 0,
            "createdAt": "2021-07-22T19:58:11.516Z",
            "createdBy": 1,
            "modifiedAt": "2021-09-27T06:38:19.516Z",
            "modifiedBy": 1
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(r => {
        var a = 1
        alert("Se han guardado los cambios")
        location.href = 'Index';

        
    }).catch(error => alert("Error al actualizar el Vehículo"))
}

function modificarChofer(idUsuario) {

    var a = 1;
}
