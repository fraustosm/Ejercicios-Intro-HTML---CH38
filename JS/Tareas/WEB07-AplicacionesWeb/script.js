// Función para cambiar el nombre
function cambiarNombre() {
    var nuevoNombre = prompt("¿Cuál es tu nombre?");
    if (nuevoNombre !== null && nuevoNombre !== "") {
      document.getElementById("saludo").innerText = "Hola " + nuevoNombre;
    }
  }
  