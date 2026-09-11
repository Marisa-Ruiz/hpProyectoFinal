# ⚡ Archivo Mágico

Una web hecha con **React** que consume la [HP-API](https://hp-api.onrender.com/) para mostrar personajes del universo de Harry Potter, y que además sirve como página de presentación de un desarrollador freelance.

Es un proyecto final de bootcamp, pensado tanto para practicar consumo de APIs con Axios como para tener una pieza de portfolio real que enseñar.

## 🔗 Enlaces

- **Repositorio:** https://github.com/Marisa-Ruiz/hpProyectoFinal
- **Demo en producción:** _(añadir aquí el enlace de Vercel una vez desplegado)_

## 🪄 Qué hace la web

La aplicación tiene dos páginas, conectadas mediante React Router:

- **Inicio** — Presentación personal como desarrolladora freelance: quién soy, qué servicios ofrezco y cómo contactar.
- **Personajes** — Consume la HP-API en tiempo real y muestra los personajes en tarjetas, con:
  - Buscador por nombre
  - Filtro por casa de Hogwarts
  - Filtro por rol (estudiante / personal de Hogwarts)
  - Estados de carga y error propios, sin depender de recargar la página

Todo el diseño es responsive: se adapta desde pantallas de escritorio hasta móviles pequeños.

## 🧱 Tecnologías

- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/) para las peticiones a la API
- [React Router](https://reactrouter.com/) para la navegación entre páginas
- CSS puro, sin frameworks

## 📁 Estructura del proyecto
src/
├── components/
│ ├── Header/ # Cabecera con navegación
│ ├── Footer/ # Pie de página
│ ├── CharacterCard/ # Tarjeta individual de personaje
│ ├── CharacterList/ # Rejilla de tarjetas
│ ├── Filters/
│ │ ├── FiltersBar/ # Agrupa los tres filtros
│ │ ├── FilterSelect/ # Select reutilizable (casa / rol)
│ │ └── SearchBar/ # Buscador por nombre
│ └── Common/
│ ├── Loader/ # Indicador de carga
│ └── ErrorMessage/ # Mensaje de error
├── data/
│ └── constants.js # Listas de casas, roles e imagen de reserva
├── hooks/
│ └── useCharacters.js # Lógica de carga de personajes según filtros
├── pages/
│ ├── homePage/ # Página de inicio (freelance)
│ └── charactersPage/ # Página de personajes
├── services/
│ └── apiService.js # Única puerta de entrada a la HP-API
├── App.jsx # Rutas y layout general
└── main.jsx # Punto de entrada

La idea detrás de esta organización: los componentes nunca llaman a Axios directamente. Todo pasa por `apiService.js`, y `useCharacters.js` es el único sitio que decide qué función del servicio llamar según los filtros activos. Si mañana cambia la API, solo hay que tocar un archivo.

## 🌐 Endpoints de la HP-API utilizados

| Endpoint | Cuándo se usa |
|---|---|
| `GET /api/characters` | Sin filtro de casa ni de rol |
| `GET /api/characters/students` | Filtro de rol = "Estudiantes" |
| `GET /api/characters/staff` | Filtro de rol = "Personal de Hogwarts" |
| `GET /api/characters/house/:house` | Hay una casa seleccionada (tiene prioridad sobre el rol) |

La búsqueda por nombre se resuelve en el propio navegador, filtrando sobre los personajes ya recibidos — la API no ofrece un endpoint de búsqueda.

## 💻 Instalación y uso en local

Necesitas [Node.js](https://nodejs.org/) 18 o superior instalado. Compruébalo con:

```bash
node -v
```

Pasos:

```bash
# 1. Clona el repositorio
git clone https://github.com/Marisa-Ruiz/hpProyectoFinal.git
cd hpProyectoFinal

# 2. Instala las dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

### Otros scripts disponibles

```bash
npm run build     # Genera la versión de producción en /dist
npm run preview   # Sirve en local la versión de /dist
npm run lint       # Revisa el código con ESLint
```

## 🚀 Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com/), conectado directamente al repositorio de GitHub: cada cambio en la rama `main` se despliega automáticamente.

## ⚠️ Nota sobre la API

La HP-API está alojada en un plan gratuito de Render, que "duerme" el servidor tras un rato sin actividad. La primera petición después de un periodo de inactividad puede tardar unos segundos en responder mientras el servidor se reactiva — es un comportamiento normal de la API, no un fallo de esta aplicación.

## ✨ Créditos

Datos de personajes proporcionados por [HP-API](https://hp-api.onrender.com/), un proyecto de código abierto no afiliado a J.K. Rowling ni a Warner Bros. Este repositorio es un ejercicio de portfolio con fines educativos.