document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#btnIniciarSesion")
    .addEventListener("click", function () {
      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contrasena").value;
      document.getElementById("dialog-1").setAttribute("open", "open");
    });
});
