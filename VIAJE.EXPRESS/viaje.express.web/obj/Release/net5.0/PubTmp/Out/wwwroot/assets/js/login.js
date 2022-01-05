
function validarLogin() {

    fetch('https://apptaxis2.azurewebsites.net/Usuario/1003943832/123')
            .then(function (result) {
                if (result.ok) {
                    return result.json();
                }
            })
            .then(function (data) {
                location.href = 'RegistroChofer/Index'

            })

   
                     
         
}










