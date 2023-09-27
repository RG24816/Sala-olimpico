
// Obtén una referencia al formulario de inicio de sesión
const formularioInicioSesion = document.getElementById('formularioInicioSesion');

// Agrega un evento de envío al formulario
formularioInicioSesion.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtiene los valores de correo electrónico y contraseña ingresados por el usuario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Realiza una solicitud al servidor para validar las credenciales
    validarCredenciales(usuario, contrasena);
});
// Obtener el valor de la cookie "rol"
const rol = getCookie('rol');

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

// Ahora puedes usar el valor de 'rol' para personalizar la funcionalidad
if (rol === 'administrador') {
  // Aquí agregas código específico para administradores
  console.log('Usuario administrador');
} else if (rol === 'usuario') {
  // Aquí agregas código específico para usuarios genéricos
  console.log('Usuario genérico');
} else {
  // Manejar otros casos si es necesario
  console.log('Rol desconocido o no autenticado');
}

function validarCredenciales(usuario, contrasena) {
    // Realiza una solicitud POST al servidor para validar las credenciales
    fetch('/validar-inicio-sesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }), // Envía los datos al servidor en formato JSON
    })
        .then(response => response.json())
        .then(data => {
            // Muestra un mensaje al usuario
            if (data.mensaje) {
                alert(data.mensaje);
            } else {
                alert('Credenciales inválidas. Inicio de sesión fallido.');
            }
        
            // Cuando las credenciales son válidas, redirige al usuario a index.html
            if (data.mensaje === 'Credenciales válidas. Inicio de sesión exitoso.') {
                window.location.href = '/index.html';
            }
        })
        
            // Puedes redirigir al usuario a otra página aquí si lo deseas

        .catch(error => {
            console.error('Error al validar credenciales:', error);
            alert('Ocurrió un error al iniciar sesión.');
        });
} 