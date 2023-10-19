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
const miDiv = document.querySelectorAll(".btn-menus");

// Agrega un controlador de eventos de clic al div
miDiv.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Cambia el color al hacer clic
    boton.style.backgroundColor = "#ff5733";
    boton.addEventListener("click", () => {
      // Abre una nueva ventana o ventana emergente
      const nuevaVentana = window.open(
        "https://www.google.com",
        "NombreVentana",
        "width=600,height=400"
      );
    });
  });

  // Puedes personalizar las propiedades de la ventana emergente según tus necesidades
});
