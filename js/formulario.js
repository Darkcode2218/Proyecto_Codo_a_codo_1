let nombre = document.getElementById('nombre')

let email = document.getElementById('email')


function enviarFormulario(){

    console.log('Formulario enviado')

    if(nombre.value === null || nombre.value === '') {

        console.log('-ERROR Ingresa tu nombre')

    }


    if(email.value === null || email.value === '') {

        console.log('-ERROR Ingresa tu email')

    }


    return false;

}