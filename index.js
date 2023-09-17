// Función para manejar el envío del formulario
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtiene los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cotizacion = document.getElementById("cotizacion").value;

    // Crea un objeto JSON con los datos
    var datos = {
        Nombre: nombre,
        Apellido: apellido,
        Cotizacion: cotizacion
    };

    // Guarda los datos en el almacenamiento local (localStorage)
    localStorage.setItem("formularioDatos", JSON.stringify(datos));

    // Muestra los datos en el DOM
    mostrarDatos(datos);
});

// Función para mostrar los datos en el DOM
function mostrarDatos(datos) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <br>
        <h3>Cotizacion Actual:</h3>
        <p><strong>Nombre:</strong> ${datos.Nombre}</p>
        <p><strong>Apellido:</strong> ${datos.Apellido}</p>
        <p><strong>Dolar Tarjeta:</strong> ${datos.Cotizacion * 1.75}</p>
    `;
}

// Comprueba si hay datos almacenados en localStorage y los muestra
var datosGuardados = localStorage.getItem("formularioDatos");
if (datosGuardados) {
    mostrarDatos(JSON.parse(datosGuardados));
}
