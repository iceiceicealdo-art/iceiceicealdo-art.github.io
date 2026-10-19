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

  // Mostrar mensaje flotante de confirmación
  mostrarMensajeFlotante(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito.`);

  formulario.reset();
});

/**
 * Muestra una notificación flotante de confirmación temporal en pantalla
 */
function mostrarMensajeFlotante(mensaje) {
  // Remover mensaje previo si todavía está activo
  const mensajePrevio = document.getElementById("mensaje-flotante");
  if (mensajePrevio) {
    mensajePrevio.remove();
  }

  // Crear el contenedor flotante
  const toast = document.createElement("div");
  toast.id = "mensaje-flotante";
  toast.className = "mensaje-flotante";
  toast.innerHTML = `
    <span class="icono">☕</span>
    <span class="texto">${mensaje}</span>
  `;

  document.body.appendChild(toast);

  // Animación de entrada
  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  // Animación de salida y remoción tras 4 segundos
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}
