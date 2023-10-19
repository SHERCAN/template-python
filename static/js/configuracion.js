document.addEventListener("DOMContentLoaded", function () {
  const agregarFilaBtn = document.getElementById("agregarFila");
  const guardarBtn = document.getElementById("guardar");
  const formulario = document
    .getElementById("formulario")
    .getElementsByTagName("tbody")[0];

  agregarFilaBtn.addEventListener("click", function () {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td><input type="text" name="titulo" class="form-control"></td>
            <td><input type="checkbox" name="obligatorio" class="form-check-input"></td>
            <td><input type="checkbox" name="autocompletado" class="form-check-input"></td>
            <td>
                <button class="btn btn-danger delete-row">-</button>
            </td>
        `;
    formulario.appendChild(newRow);
    addDeleteRowListener(newRow); // Agrega el listener al nuevo botón
  });

  guardarBtn.addEventListener("click", function () {
    const data = [];
    const rows = formulario.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName("td");
      if (cols.length === 4) {
        const item = {
          "Titulo Campo": cols[0].querySelector(".form-control").value,
          Obligatorio: cols[1].querySelector(".form-check-input").checked,
          Autocompletado: cols[2].querySelector(".form-check-input").checked,
        };
        data.push(item);
      }
    }

    // Convertir a JSON
    const jsonData = JSON.stringify(data, null, 2);
    alert(jsonData);
    console.log(jsonData);
  });

  // Agrega el listener a los botones de eliminar existentes
  const deleteButtons = document.getElementsByClassName("delete-row");
  for (let i = 0; i < deleteButtons.length; i++) {
    addDeleteRowListener(deleteButtons[i].parentNode.parentNode);
  }
});

// Función para agregar el listener de eliminar fila a un botón
function addDeleteRowListener(row) {
  const deleteButton = row.querySelector(".delete-row");
  deleteButton.addEventListener("click", function () {
    row.remove();
  });
}
// Tabla de conexión
const tipoConexion = document.getElementById("tipoConexion");
const configSerial = document.getElementById("configSerial");
const configTCP = document.getElementById("configTCP");

tipoConexion.addEventListener("change", function () {
  if (tipoConexion.value === "serial") {
    configSerial.style.display = "block";
    configTCP.style.display = "none";
  } else if (tipoConexion.value === "tcpip") {
    configSerial.style.display = "none";
    configTCP.style.display = "block";
  }
});
