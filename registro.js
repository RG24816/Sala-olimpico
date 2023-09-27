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
    registrarUsuario(email, nombre, contrasena);
});

function registrarUsuario(email, nombre, contrasena) {
    // Realiza una solicitud POST al servidor para registrar al usuario
    fetch('/registrar-usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nombre, contrasena }), // Envía los datos al servidor en formato JSON
    })
        .then(response => response.json())
        .then(data => {
            // Muestra un mensaje al usuario
            alert(data.mensaje);
            // Cuando el registro es exitoso, redirige al usuario a la página de inicio de sesión
            if (data.mensaje === 'Registro exitoso.') {
                window.location.href = '/'; // Cambia la ruta según tus necesidades
            }
        })
        .catch(error => {
            console.error('Error al registrar usuario:', error);
            alert('Ocurrió un error al registrar usuario.');
        });
}
