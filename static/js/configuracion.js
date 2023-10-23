document.addEventListener("DOMContentLoaded", function () {
  const agregarFilaBtn = document.getElementById("agregarFila");
  const agregarOperarioBtn = document.getElementById("agregarOperario");
  const guardarBtn = document.getElementById("guardar");
  const tablaAdministradores = document.querySelectorAll(
    "#tablaAdministradores table"
  );
  const tablaServidorPeso = document.querySelectorAll(
    "#tablaServidorPeso table"
  );
  const formulario = document
    .getElementById("formulario")
    .getElementsByTagName("tbody")[0];
  const formularioOperario = document
    .getElementById("formularioOperario")
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
  agregarOperarioBtn.addEventListener("click", function () {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>      <input type="text" name="titulo" class="form-control" /></td>
        <td><input type="text" class="form-control" /></td>
    <td>      <input type="password" class="form-control" />    </td>
    <td>      <button class="btn btn-danger delete-row">-</button>    </td>
        `;
    formularioOperario.appendChild(newRow);
    addDeleteRowListener(newRow); // Agrega el listener al nuevo botón
  });

  guardarBtn.addEventListener("click", function () {
    const datos = [];
    const rows = formulario.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName("td");
      if (cols.length === 4) {
        const item = {
          "Titulo Campo": cols[0].querySelector(".form-control").value,
          Obligatorio: cols[1].querySelector(".form-check-input").checked,
          Autocompletado: cols[2].querySelector(".form-check-input").checked,
        };
        datos.push(item);
      }
    }

    const datosOperarios = [];
    const rowsOperarios = formularioOperario.getElementsByTagName("tr");

    for (let i = 0; i < rowsOperarios.length; i++) {
      const cols = rowsOperarios[i].getElementsByTagName("td");
      if (cols.length === 4) {
        const item = {
          Operador: cols[0].querySelector(".form-control").value,
          Usuario: cols[1].querySelector(".form-control").value,
          Contraseña: cols[2].querySelector(".form-control").value,
        };
        datosOperarios.push(item);
      }
    }

    var formDataUsuario = datos;
    var formOperarios = datosOperarios;
    var tipoConexion = document.getElementById("tipoConexion").value;
    var formDataConexion = {};

    if (tipoConexion === "serial") {
      formDataConexion = {
        puertoSerial: document.getElementById("puertoSerial").value,
        baudiosSerial: document.getElementById("baudiosSerial").value,
        paridadSerial: document.getElementById("paridadSerial").value,
      };
    } else if (tipoConexion === "tcpip") {
      formDataConexion = {
        hostTCP: document.getElementById("hostTCP").value,
        puertoTCP: document.getElementById("puertoTCP").value,
      };
    }
    var dataAdministradores = [];
    tablaAdministradores.forEach((table, index) => {
      // Obtén todas las filas de la tabla
      const rows = table.querySelectorAll("tbody tr");
      console.log(rows);
      // Crea un objeto para almacenar los datos de un administrador
      const adminData = {};

      // Recorre las filas y extrae los valores de los campos
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const fieldName = cells[0].textContent.trim();
        const fieldValue = cells[1].querySelector("input").value;

        // Asigna el valor al objeto del administrador
        adminData[fieldName] = fieldValue;
      });

      // Agrega el objeto del administrador al arreglo de datos
      dataAdministradores.push(adminData);
    });
    var dataServidorPeso = [];
    tablaServidorPeso.forEach((table, index) => {
      // Obtén todas las filas de la tabla
      const rows = table.querySelectorAll("tbody tr");
      console.log(rows);
      // Crea un objeto para almacenar los datos de un administrador
      const adminData = {};

      // Recorre las filas y extrae los valores de los campos
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const fieldName = cells[0].textContent.trim();
        const fieldValue = cells[1].querySelector("input").value;

        // Asigna el valor al objeto del administrador
        adminData[fieldName] = fieldValue;
      });

      // Agrega el objeto del administrador al arreglo de datos
      dataServidorPeso.push(adminData);
    });
    var data = {
      datosUsuario: formDataUsuario,
      configuracionConexion: {
        tipoConexion: tipoConexion,
        datos: formDataConexion,
      },
      datosOperarios: formOperarios,
      datosAdministradores: dataAdministradores,
      datosServidorPeso: dataServidorPeso,
    };

    var jsonData = JSON.stringify(data);
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
