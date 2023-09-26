// Obtén una referencia al formulario de registro
const formularioRegistro = document.getElementById('formularioRegistro');

// Agrega un evento de envío al formulario
formularioRegistro.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtiene los valores del formulario
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;

    // Verifica si la contraseña y la confirmación coinciden
    if (contrasena !== confirmarContrasena) {
        alert('La contraseña y la confirmación de contraseña no coinciden.');
        return;
    }

    // Realiza una solicitud al servidor para registrar al usuario
    registrarUsuario(nombre, email, contrasena);
});

// Resto del código para registrar al usuario (similar al ejemplo anterior)
