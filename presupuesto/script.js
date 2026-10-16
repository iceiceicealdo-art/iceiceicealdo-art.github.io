// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {

    // 1. Obtener el botón por su id (o por etiqueta si no tiene id)
    const botonCalcular = document.getElementById('btn-calcular') || document.querySelector('button');
    const resultadoDiv = document.getElementById('resultado');

    if (botonCalcular) {
        botonCalcular.addEventListener('click', () => {
            // 2. Obtener los valores de los inputs
            const horas = parseFloat(document.getElementById('horas').value) || 0;
            const tarifa = parseFloat(document.getElementById('tarifa').value) || 0;
            const descuento = parseFloat(document.getElementById('descuento').value) || 0;

            // 3. Realizar las operaciones matemáticas
            const subtotal = horas * tarifa;
            const montoDescuento = subtotal * (descuento / 100);
            const total = subtotal - montoDescuento;

            // 4. Mostrar el resultado en pantalla
            if (resultadoDiv) {
                resultadoDiv.style.display = 'block';
                resultadoDiv.innerHTML = `<strong>Total a Cobrar:</strong> S/ ${total.toFixed(2)}`;
            } else {
                alert(`Total a Cobrar: S/ ${total.toFixed(2)}`);
            }
        });
    }

});