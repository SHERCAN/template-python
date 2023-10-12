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
