const botonCalcular = document.getElementById("btn-calcular");
const resultado = document.getElementById("resultado");

function calcularPresupuesto() {
  const horas = Number(document.getElementById("horas").value);
  const tarifa = Number(document.getElementById("tarifa").value);
  const descuento = Number(document.getElementById("descuento").value);

  if (horas <= 0 || tarifa <= 0) {
    resultado.textContent = "Escribe horas y tarifa mayores que 0.";
    resultado.className = "error";
    return;
  }

  if (descuento < 0 || descuento > 100) {
    resultado.textContent = "El descuento debe estar entre 0 y 100.";
    resultado.className = "error";
    return;
  }

  const subtotal = horas * tarifa;
  const total = subtotal - subtotal * (descuento / 100);

  resultado.textContent = "Total: " + total.toFixed(2);
  resultado.className = "";
}

botonCalcular.addEventListener("click", calcularPresupuesto);