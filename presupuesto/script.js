document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-calcular');
    const resultado = document.getElementById('resultado');
    const mensajeError = document.getElementById('mensaje-error');

    if (boton) {
        boton.addEventListener('click', () => {
            const strHoras = document.getElementById('horas').value.trim();
            const strTarifa = document.getElementById('tarifa').value.trim();
            const strDescuento = document.getElementById('descuento').value.trim();
            const strMateriales = document.getElementById('materiales').value.trim();

            // Ocultar mensajes previos
            if (mensajeError) {
                mensajeError.style.display = 'none';
                mensajeError.textContent = '';
            }
            if (resultado) {
                resultado.style.display = 'none';
                resultado.innerHTML = '';
            }

            // 1. VALIDACIÓN: Campos vacíos
            if (strHoras === '' || strTarifa === '') {
                mostrarError('⚠️ Por favor completa los campos obligatorios: Horas y Tarifa.');
                return;
            }

            const horas = parseFloat(strHoras);
            const tarifa = parseFloat(strTarifa);
            const descuento = strDescuento === '' ? 0 : parseFloat(strDescuento);
            const materiales = strMateriales === '' ? 0 : parseFloat(strMateriales);

            // Validar números válidos
            if (isNaN(horas) || isNaN(tarifa) || isNaN(descuento) || isNaN(materiales)) {
                mostrarError('⚠️ Ingresa números válidos en los campos.');
                return;
            }

            // 2. VALIDACIÓN: Valores negativos
            if (horas < 0 || tarifa < 0 || descuento < 0 || materiales < 0) {
                mostrarError('❌ Error: No se permiten valores negativos.');
                return;
            }

            // 3. VALIDACIÓN: Descuento mayor al 100% (ej. 150)
            if (descuento > 100) {
                mostrarError(`❌ Error: El descuento no puede ser superior al 100% (ingresaste ${descuento}%).`);
                return;
            }

            // CÁLCULO:
            // Subtotal = Horas * Tarifa
            const subtotal = horas * tarifa;
            // Descuento sobre el subtotal
            const montoDescuento = subtotal * (descuento / 100);
            const subtotalConDescuento = subtotal - montoDescuento;
            // Costo extra de materiales sumado DESPUÉS del descuento
            const total = subtotalConDescuento + materiales;

            if (resultado) {
                resultado.innerHTML = `
                    <div class="desglose-linea"><span>Subtotal:</span> <strong>S/ ${subtotal.toFixed(2)}</strong></div>
                    <div class="desglose-linea"><span>Descuento (${descuento}%):</span> <strong>-S/ ${montoDescuento.toFixed(2)}</strong></div>
                    <div class="desglose-linea"><span>Materiales / Costo extra:</span> <strong>+S/ ${materiales.toFixed(2)}</strong></div>
                    <hr class="desglose-separador">
                    <div class="desglose-total"><strong>Total a cobrar:</strong> S/ ${total.toFixed(2)}</div>
                `;
                resultado.style.display = 'block';
            }
        });
    }

    function mostrarError(texto) {
        if (mensajeError) {
            mensajeError.textContent = texto;
            mensajeError.style.display = 'block';
        }
    }
});