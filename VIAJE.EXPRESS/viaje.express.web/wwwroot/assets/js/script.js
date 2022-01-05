
function validar() {
   

    const url = 'http://localhost:59454/Persona/' + document.getElementById("usuario").value+'/'+ document.getElementById("pass").value
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var id_usuario = data.idPersona
            validarUsuario(id_usuario)
            //location.href = 'Cliente/Cliente'  

                    
          
        })
        .catch(err => alert("Usuario o contrasenia erroneos")

        )

}
function validarUsuario(id_usuario) {


    const url = 'http://localhost:59454/PersonaRol/' + id_usuario
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var id_rol = data['rolId']
            validarUsuario(id_rol)
            //location.href = 'Cliente/Cliente'
        })
        .catch(err => alert("Usuario o contrasenia erroneos")

        )

}
function validarUsuario(id_rol) {


    const url = 'http://localhost:59454/Rol/' + id_rol
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var rol = data['descrpcionRol']
            switch (rol) {
                case "Administrador":
                    alert(rol)
                    location.href = '../Cliente/Cliente'
                    break
                case "Cliente":
                    alert(rol)
                    location.href = '../Cliente/Cliente'
                    break
                case "Cooperativa":
                    alert(rol)
                    location.href = '../Cooperativa/Cooperativa'
                    break
                case "Operadora":
                    alert(rol)
                    location.href = '../Cliente/Cliente'
                    break
                default:
                    alert(rol)
                    location.href = '../Cliente/Cliente'
                    break

            }
            
        })
        .catch(err => alert("Usuario o contrasenia erroneos")

        )

}










