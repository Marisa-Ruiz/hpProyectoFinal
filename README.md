# ⚡ Archivo Mágico — Universo Harry Potter

![Vista previa de la aplicación](src/assets/imgReadme.png)

Proyecto final desarrollado en **React** para el módulo de frontend. La aplicación consume la API pública de Harry Potter ([HP-API](https://hp-api.onrender.com/)) mediante **Axios**, mostrando fichas interactivas de personajes con filtrado dinámico. Además, incluye una página de presentación personal como desarrolladora web freelance.

---

## 🚀 Demo y Repositorio

* **[GitHub](https://github.com/Marisa-Ruiz/hpProyectoFinal)**
* **[Vercel](https://hp-proyecto-final.vercel.app/)**

---

## 🧭 ¿Qué incluye la web?

La aplicación cuenta con dos páginas principales conectadas mediante **React Router**:

### 1. Inicio (`/`) — Portfolio Freelance
Página de aterrizaje donde me presento como desarrolladora web frontend:
* Quién soy y enfoque de trabajo.
* Servicios que ofrezco (desarrollo a medida, integración de APIs, mantenimiento).
* Stack de tecnologías habituales.
* Llamadas a la acción y enlaces directos de contacto (Email, LinkedIn, GitHub).

### 2. Personajes (`/characters`) — Explorador con HP-API
Consume datos en tiempo real de la API de Harry Potter y muestra los personajes en un catálogo visual con:
* **Buscador en tiempo real** por nombre del personaje.
* **Filtro por Casa de Hogwarts** (Gryffindor, Slytherin, Ravenclaw, Hufflepuff o todas).
* **Filtro por Rol** (Estudiantes o Personal docente/staff).
* **Filtros combinables:** puedes filtrar por casa y rol a la vez (ej. ver únicamente estudiantes de Gryffindor) de manera instantánea.
* **Manejo de estados:** componentes dedicados para carga (`Loader`) y posibles fallos de conexión (`ErrorMessage`).
* **Imágenes protegidas:** si un personaje no tiene foto o el enlace externo falla, se muestra automáticamente un placeholder ilustrado.

Toda la interfaz cuenta con **Header sticky** con enlaces activos, **Footer** informativo y diseño 100% **responsive** adaptable a móvil y escritorio.

---

## 🛠️ Tecnologías utilizadas

* **React 19** con **Vite** como empaquetador rápido.
* **Axios** para el cliente HTTP y consumo de la REST API.
* **React Router Dom (v7)** para el enrutamiento SPA sin recargas.
* **CSS puro modular:** variables CSS nativas para colores y espaciados temáticos, sin sobrecargar con librerías externas.
* **ESLint** para mantener el código limpio y sin errores de sintaxis.

---

## 📁 Estructura del proyecto

El código está organizado siguiendo buenas prácticas de modularidad y responsabilidad única:

```text
hpProyectoFinal/
├── public/
│   ├── favicon.svg
│   └── preview.jpg
├── src/
│   ├── components/
│   │   ├── CharacterCard/       # Ficha individual con datos y fallback de imagen
│   │   ├── CharacterList/       # Rejilla de tarjetas con mensaje de estado vacío
│   │   ├── Common/              # Componentes reutilizables (Loader, ErrorMessage)
│   │   ├── Filters/             # Buscador y selectores de filtros
│   │   ├── Header/              # Barra de navegación con indicador de página activa
│   │   └── Footer/              # Pie de página con créditos
│   ├── data/
│   │   └── constants.js         # Constantes de casas, roles e imagen por defecto
│   ├── hooks/
│   │   └── useCharacters.js     # Custom hook para obtención y filtrado en memoria
│   ├── pages/
│   │   ├── homePage/            # Página de presentación freelance
│   │   └── charactersPage/      # Catálogo de personajes
│   ├── services/
│   │   └── apiService.js        # Capa de servicio Axios conectada a la HP-API
│   ├── App.jsx                  # Rutas y maquetación principal
│   ├── index.css                # Variables de diseño y estilos globales
│   └── main.jsx                 # Punto de entrada de la app
├── package.json
└── vite.config.js
```

> **Criterio Clean Code:** Los componentes visuales no conocen los detalles técnicos de la API. Toda la comunicación HTTP está encapsulada en `apiService.js`, y la lógica de estado se gestiona en el custom hook `useCharacters.js`.

---

## 🌐 Endpoints de la API

La aplicación se comunica con [https://hp-api.onrender.com/api](https://hp-api.onrender.com/api) a través de Axios:

| Endpoint | Descripción |
| :--- | :--- |
| `GET /characters` | Obtiene el catálogo completo de personajes |
| `GET /characters/students` | Personajes que son estudiantes |
| `GET /characters/staff` | Personal docente y empleados de Hogwarts |
| `GET /characters/house/:house` | Personajes pertenecientes a una casa específica |

---

## 💻 Instalación y ejecución en local

Para clonar y probar el proyecto en tu ordenador, sigue estos pasos:

### 1. Requisitos previos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior). Puedes comprobarlo con:
```bash
node -v
```

### 2. Clonar el repositorio
```bash
git clone https://github.com/Marisa-Ruiz/hpProyectoFinal.git
cd hpProyectoFinal
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Iniciar el entorno de desarrollo
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173/` (o el puerto que te indique la consola).

### Otros comandos útiles:
* `npm run lint` — Pasa el linter ESLint (0 errores).
* `npm run build` — Genera el empaquetado optimizado en la carpeta `/dist`.
* `npm run preview` — Previsualiza localmente el build de producción.

---

## ⏱️ Nota sobre la API de pruebas

La HP-API gratuita está alojada en Render. Si el servidor lleva un rato inactivo entra en reposo temporal, por lo que la primera carga puede demorarse unos segundos hasta despertar. Una vez cargados los datos, toda la navegación y filtrado funcionan de forma inmediata.

---

## 👤 Autora

* **Marisa Ruiz** — Desarrolladora Frontend
* [Contacto](mailto:marysa.rt85@gmail.com)
* [GitHub](https://github.com/Marisa-Ruiz)