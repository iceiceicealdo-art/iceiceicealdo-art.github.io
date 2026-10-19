const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    respuesta.textContent = "Por favor completa todos los campos.";
    respuesta.className = "error";
    return;
  }

  if (!correo.includes("@")) {
    respuesta.textContent = "Escribe un correo válido.";
    respuesta.className = "error";
    return;
  }

  respuesta.textContent = "¡Gracias, " + nombre + "! Te responderemos pronto.";
  respuesta.className = "exito";
  formulario.reset();
