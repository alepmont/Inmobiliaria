document.addEventListener("DOMContentLoaded", function() {
    const formularioContacto = document.getElementById("formulario-contacto");

    formularioContacto.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const tema = document.getElementById("tema").value;
        const mensaje = document.getElementById("mensaje").value;

        const telefonoRegex = /^\d{10}$/;
        const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; 


		if (nombre === "" || !telefono.match(telefonoRegex) || !correo.match(correoRegex) || tema === "" || mensaje === "") {
            alert("Por favor, complete todos los campos correctamente.");
        } else {

			alert("Formulario enviado con éxito.");
            formularioContacto.reset(); 
        }
    });
});
