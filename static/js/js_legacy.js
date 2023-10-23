// Obtener los datos de la tabla enTransito
var table = document.getElementById("enTransito");
var rows = table.getElementsByTagName("tr");
for (var i = 0; i < rows.length; i++) {
  rows[i].addEventListener("click", function () {
    var cells = this.getElementsByTagName("td");
    if (cells.length > 0) {
      var nombre = cells[0].textContent;
      var edad = cells[1].textContent;
      var ciudad = cells[2].textContent;
      console.log(
        "Nombre: " + nombre + ", Edad: " + edad + ", Ciudad: " + ciudad
      );
    }
  });
}

// Selecciona el div por su ID
const btnConf = document.querySelector("#btnConfiguracion");

// Agrega un controlador de eventos de clic al div
btnConf.addEventListener("click", () => {
  // Abre una nueva ventana o ventana emergente
  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/colpesaje/legacy3.0.0/configuracion";
  const nuevaVentana = window.open(
    url,
    "NombreVentana",
    "width=600,height=400"
  );
});
const btnIn = document.querySelector("#btnIniciarSesion");

// Agrega un controlador de eventos de clic al div
btnIn.addEventListener("click", () => {
  // Abre una nueva ventana o ventana emergente
  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/colpesaje/legacy3.0.0/sesion";
  const nuevaVentana = window.open(
    url,
    "NombreVentana",
    "width=600,height=400"
  );
});
