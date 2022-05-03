//Código JS para el formulario de contacto

// Tomo los campos y los hago variables

let campoNombre = document.getElementById("txtNombre");
let campoEmail = document.getElementById("txtEmail");
let campoAsunto = document.getElementById("txtAsunto");
let campoMensaje = document.getElementById("txtMensaje");


//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);
let divNombre = document.createElement('div');
let divEmail = document.createElement('div');
let divAsunto = document.createElement('div');
let divMensaje = document.createElement('div');
let div = document.createElement('div');
div.id = 'content';

function validarFormulario(ev) {

    // Validación campo Nombre
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let divCampoNombre = document.getElementById("divCampoNombre");
    let divCampoEmail = document.getElementById("divCampoEmail");
    let divCampoAsunto = document.getElementById("divCampoAsunto");
    let divCampoMensaje = document.getElementById("divCampoMensaje");
    div.innerHTML = "";
    divNombre.innerHTML = "";
    divEmail.innerHTML = "";
    divAsunto.innerHTML = "";
    divMensaje.innerHTML = "";
    comprobarCampoNombre();
    comprobarCampoEmail();
    comprobarCampoAsunto();
    comprobarCampoMensaje();
    if ((comprobarCampoNombre() == true) && (comprobarCampoEmail() == true) && (comprobarCampoAsunto() == true) && (comprobarCampoMensaje() == true)) {
        let formData = {
            nombre: campoNombre.value,
            email: campoEmail.value,
            asunto: campoAsunto.value,
            mensaje: campoMensaje.value
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function() {
            console.log(xhr.responseText);
            if (xhr.responseText == 'ok') {
                campoNombre.value = "";
                campoEmail.value = "";
                campoMensaje.value = "";
                campoAsunto.value = "";
            }
        }
        xhr.send(JSON.stringify(formData));

        /* console.log(formData); */
        divNombre.innerHTML = "";
        divEmail.innerHTML = "";
        divAsunto.innerHTML = "";
        divMensaje.innerHTML = "";
        div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
          src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> ¡Envío exitoso! Nos comunicaremos con vos a la brevedad </h2></center>`;
        formulario.appendChild(div);
        ev.preventDefault();


    }

    function comprobarCampoNombre() {
        if (campoNombre.value != "") {
            if (isNaN(campoNombre.value)) {
                if (campoNombre.value.match(specialChars)) {
                    divNombre.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo no debe poseer caracteres especiales </h2>`;
                    divCampoNombre.appendChild(divNombre);
                    ev.preventDefault();
                    return false;
                }
            } else {
                divNombre.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
                src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Nombre no debe poseer números</h2>`;
                divCampoNombre.appendChild(divNombre);
                ev.preventDefault();
                return false;
            }
        } else {
            divNombre.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Nombre no debe quedar vacío </h2>`;
            divCampoNombre.appendChild(divNombre);
            ev.preventDefault();
            return false;
        }
        return true;

    }

    function comprobarCampoEmail() {
        if (campoEmail.value != "") {
            var filtroMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filtroMail.test(campoEmail.value)) {
                divEmail.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
                    src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no es válido </h2>`;
                divCampoEmail.appendChild(divEmail);
                ev.preventDefault();
                return false;

            }

        } else {
            divEmail.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no debe quedar vacío </h2>`;
            divCampoEmail.appendChild(divEmail);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoAsunto() {
        if (campoAsunto.value == "") {
            divAsunto.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Asunto no debe quedar vacío </h2>`;
            divCampoAsunto.appendChild(divAsunto);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoMensaje() {
        if (campoMensaje.value == "") {
            divMensaje.innerHTML = `<h2 style="text-align: center;font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Mensaje no debe quedar vacío </h2>`;
            divCampoMensaje.appendChild(divMensaje);
            ev.preventDefault();
            return false;
        }

        return true;
    }

}