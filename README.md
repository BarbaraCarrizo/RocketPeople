# RocketPeople


API REST para Gestión de Carreras y Materias:

Este proyecto consiste en una API RESTful desarrollada con Express.js que permite gestionar carreras y materias en una universidad. La API proporciona operaciones CRUD (Crear, Leer, Actualizar, Borrar) para las carreras y materias, permitiendo a los usuarios realizar acciones como crear nuevas carreras, obtener información detallada de una carrera específica, eliminar una materia existente, etc.

Endpoints de la API
Carreras
GET /carreras - Obtener todas las carreras
Respuesta: 200 OK con un array de carreras
GET /carreras/:id - Obtener una carrera por su ID
Respuesta: 200 OK con la carrera solicitada, 404 Not Found si no existe
POST /carreras - Crear una nueva carrera
Parámetros requeridos: nombre, grado, universidad
Respuesta: 201 Created con la carrera creada, 400 Bad Request si hay errores de validación en los parámetros
DELETE /carreras/:id - Borrar una carrera por su ID
Respuesta: 200 OK si se borra exitosamente, 404 Not Found si no existe
Materias
GET /materias - Obtener todas las materias
Respuesta: 200 OK con un array de materias
GET /materias/:id - Obtener una materia por su ID
Respuesta: 200 OK con la materia solicitada, 404 Not Found si no existe
POST /materias - Crear una nueva materia
Parámetros requeridos: nombre, cuatrimestral, anio, carreraId
Respuesta: 201 Created con la materia creada, 400 Bad Request si hay errores de validación en los parámetros
DELETE /materias/:id - Borrar una materia por su ID
Respuesta: 200 OK si se borra exitosamente, 404 Not Found si no existe
Estructura de Archivos
kotlin
Copy code
tp-lab/
├── data/
│   ├── data.carreras.json
│   └── data.materias.json
├── controllers/
│   ├── carrera.controller.js
├── middlewares/
│   ├── carrera.middleware.js
│   └── materia.middleware.js
|   └── schema.Validator.js
├── routes/
│   ├── carrera.routes.js
├── schemas/
│   ├── carrera.schema.js
└── package.json

Instalación
Requisitos Previos
Node.js (v14 o superior)
npm (v6 o superior)

Pasos de Instalación

Copiar el codigo:
git clone https://github.com/BarbaraCarrizo/RocketPeople.git

Instala las dependencias del proyecto:
npm install

Inicia el servidor:
npm start

El servidor estará corriendo en http://localhost:3000.

Dependencias
express - Framework de servidor web
joi - Librería de validación nodemon - Herramienta de desarrollo para reiniciar el servidor automáticamente

Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.



