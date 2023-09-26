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

/* */

document.addEventListener("DOMContentLoaded", function () {
    const patientForm = document.getElementById("patientForm");
    const patientList = document.getElementById("patientList");
    const clearButton = document.getElementById("clearButton");

    patientForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dni = document.getElementById("dni").value;
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const fichaMedica = document.getElementById("fichaMedica").value;
        const enfermero = document.getElementById("enfermero").value;

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>DNI:</strong> ${dni}, <strong>Nombre:</strong> ${nombre}, <strong>Edad:</strong> ${edad}, <strong>Ubicación:</strong> ${ubicacion}, <strong>Ficha Médica:</strong> ${fichaMedica}, <strong>Enfermero Asignado:</strong> ${enfermero} <button class="deleteButton">Borrar</button>`;
        
        const deleteButton = listItem.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        patientList.appendChild(listItem);
        patientForm.reset();
    });

    clearButton.addEventListener("click", function () {
        patientList.innerHTML = "";
    });
});
