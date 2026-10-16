document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-calcular');
    const resultado = document.getElementById('resultado');

    if (boton) {
        boton.addEventListener('click', () => {
            // Leer los valores ingresados por el usuario
            const horas = parseFloat(document.getElementById('horas').value) || 0;
            const tarifa = parseFloat(document.getElementById('tarifa').value) || 0;
            const descuento = parseFloat(document.getElementById('descuento').value) || 0;

            // Operación matemática
            const subtotal = horas * tarifa;
            const montoDescuento = subtotal * (descuento / 100);
            const total = subtotal - montoDescuento;

            // Mostrar el resultado en el párrafo
            if (resultado) {
                resultado.innerHTML = `<strong>Total a cobrar:</strong> S/ ${total.toFixed(2)}`;
            }
        });
    }
});