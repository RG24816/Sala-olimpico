document.getElementById("mostrarFormulario").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "block";
});

document.getElementById("cerrarFormulario").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "none";
});

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Obtener los valores de "sala" y "motivo"
    var salaSeleccionada = document.getElementById("sala").value;
    var motivoSeleccionado = document.getElementById("motivo").value;
    
    // Mostrar el pop-up con el mensaje
    var mensaje = "Protocolo Código Azul\nSala: " + salaSeleccionada + "\nMotivo: " + motivoSeleccionado;
    alert(mensaje);
    
    // Cerrar el formulario
    document.getElementById("formulario").style.display = "none";
});