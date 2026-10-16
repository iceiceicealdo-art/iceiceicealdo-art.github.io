const boton = document.getElementById("btn-tema");

boton.addEventListener("click", function () {
  document.body.classList.toggle("modo-claro");
  if (document.body.classList.contains("modo-claro")) {
    boton.textContent = "Modo oscuro";
  } else {
    boton.textContent = "Modo claro";
  }
});