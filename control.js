
//Escucha al evento del formulario

document.addEventListener("DOMContentLoaded", function(){
    let formu = document.getElementById("formulario");

    formu.addEventListener('submit', validarForm);
    
});

// Variable contadora
let cont = 0;

// Funcion para validar el formulario
function validarForm(evento){
    evento.preventDefault();

    var usuario = document.getElementById('usuario').value;
// Validar que el usuario no este vacio
    if(usuario.length == 0){
        alert('El campo usuario no debe ir vacio');
        return;
    }else{
        for (const user of usuario){
            if (user =="@"){
                cont++;
                break;
            }
        }
// Validad que contenga @       
        if (cont == 0){
            alert("El campo usuario debe contener un @");
            return;
        }
    }
// Validar que sea mayor a 6 
    var password = document.getElementById('password').value;
    if (password.length<6){
        alert("Su contrasena debe contener al menos 6 caracteres");
        return;
    }
    this.submit(alert("Puedes ingresar tigre."))
}