# ☕ Portafolio Web & Landing Page: Cafe Aroma

Repositorio personal y proyectos de desarrollo web de **Aldo Castillo**. Este espacio contiene proyectos interactivos desarrollados con tecnologías web fundamentales (HTML5, CSS3 y JavaScript), incluyendo la landing page temática para la cafetería **Cafe Aroma** y la **Calculadora de Presupuesto**.

---

## 📌 Proyecto Destacado: Landing Page "Cafe Aroma"

Una *landing page* moderna, atractiva y 100% responsiva diseñada para un negocio gastronómico / cafetería de especialidad.

### 🌟 Características Principales
* **Diseño Responsivo Completo:** Adaptado mediante *media queries* para una visualización óptima en teléfonos móviles, tablets y laptops.
* **Barra de Navegación Sticky:** Menú de cabecera fijo que facilita el desplazamiento suave (*smooth scrolling*) entre secciones.
* **Hero Section:** Presentación visual con degradado cálido, tipografía destacada y botón de llamada a la acción (*Call to Action*).
* **Menú de Productos:** Cuadrícula interactiva (*CSS Grid*) con tarjetas para café espresso, capuchino y postres caseros, con efectos *hover* y precios visibles.
* **Horario de Atención:** Sección informativa con los días y turnos de apertura.
* **Formulario de Contacto Interactivo:**
  * Validación en tiempo real de campos obligatorios y formato de correo electrónico.
  * **Notificación Flotante (*Toast*):** Mensaje emergente temporal de confirmación con animación suave que confirma el envío del formulario.
* **Enlace Directo a WhatsApp:** Acceso rápido para atención y pedidos por mensajería instantánea.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **HTML5** | Estructura semántica (`<header>`, `<nav>`, `<section>`, `<main>`, `<footer>`), accesibilidad con atributos `for`/`id` y campos optimizados. |
| **CSS3** | Estilos visuales personalizados, variables CSS, maquetación flexible con **Flexbox** y **CSS Grid**, sombras, transiciones y **Media Queries** móviles/escritorio. |
| **JavaScript (Vanilla)** | Manipulación dinámica del DOM, captura de eventos `submit`, validaciones sin librerías externas y creación de alertas flotantes animadas. |

---

## ⚙️ ¿Cómo Funciona la Landing Page?

```
Usuario ingresa a la página
       │
       ▼
Navegación fluida por secciones (Menú / Horario / Contacto)
       │
       ▼
Envía formulario de contacto
       │
       ├──> ¿Campos vacíos o correo sin '@'? ──> Muestra mensaje de error
       │
       └──> ¿Datos válidos?
              ├──> Limpia el formulario (`reset()`)
              └──> Dispara `mostrarMensajeFlotante()`:
                     ├── Aparece notificación flotante animada
                     ├── Permanece 4 segundos en pantalla
                     └── Se retira suavemente del DOM
```

1. **Estructura Modular:**
   * [`cafeteria/index.html`](./cafeteria/index.html): Documento principal con la estructura semántica de la cafetería.
   * [`cafeteria/style.css`](./cafeteria/style.css): Hoja de estilos con paleta de colores café (`#3b2a20`, `#d98e4a`, `#fffaf5`) y media queries adaptativas.
   * [`cafeteria/script.js`](./cafeteria/script.js): Lógica del cliente para validación y feedback visual interactivo.

2. **Adaptabilidad (Responsive Design):**
   * **Laptops (≥ 1024px):** Cuadrícula de 3 columnas para los productos y barra de navegación espaciada.
   * **Tablets (≤ 768px):** Reorganización en 2 columnas equilibradas.
   * **Celulares (≤ 600px):** Navegación táctil estilo botones/cápsula y tarjetas de productos en 1 columna vertical para lectura cómoda.

---

## 📂 Estructura del Repositorio

```text
mi-portafolio/
│
├── index.html            # Portafolio principal de Aldo Castillo
├── style.css             # Estilos globales y temas (Claro / Oscuro)
├── script.js             # Lógica del portafolio (Modo claro/oscuro)
│
├── cafeteria/            # Proyecto: Landing Page Cafe Aroma
│   ├── index.html        # Estructura de la cafetería
│   ├── style.css         # Estilos y media queries de la cafetería
│   └── script.js         # Validaciones y mensaje flotante
│
├── presupuesto/          # Proyecto: Calculadora de Presupuesto
│   ├── index.html        # Interfaz de la calculadora
│   ├── style.css         # Estilos de la calculadora
│   └── script.js         # Lógica con validaciones y costos extra
│
└── README.md             # Documentación del repositorio
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. Clona el repositorio en tu máquina:
   ```bash
   git clone https://github.com/iceiceicealdo-art/iceiceicealdo-art.github.io.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd iceiceicealdo-art.github.io
   ```
3. Abre cualquier archivo HTML en tu navegador favorito:
   * Portafolio principal: doble clic en `index.html`.
   * Landing page cafetería: doble clic en `cafeteria/index.html`.
   * O utiliza una extensión como **Live Server** en VS Code.

---

## 👤 Autor
* **Aldo Castillo**
* GitHub: [@iceiceicealdo-art](https://github.com/iceiceicealdo-art)

