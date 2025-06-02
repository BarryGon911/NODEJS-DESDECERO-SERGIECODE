// 🗣️ Conversación simulada: cómo funciona una API RESTful

// **Escenario:** Una App requiere quiere mostrar información de libros.

// **Participantes:**
// * 📱 La aplicación (el  **cliente** ).
// * 🌐 El servidor (la  **API RESTful** ).

// ** Paso 1: Obtener todos los libros **
// 📱 App: “Hola servidor, ¿puedes darme la lista de libros?”
// 🌐 Servidor (usando `GET /libros`): “Claro, aquí tienes:

[
  { "id": 1, "titulo": "1984" },
  { "id": 2, "titulo": "Cien años de soledad" }
]

// ** Paso 2: Agregar un libro nuevo **
// 📱 App: “Quiero agregar un nuevo libro llamado *El Principito*.”
// 🌐 Servidor (usando `POST /libros` con datos): “¡Hecho! - El libro fue agregado con ID 3.”

// ** Paso 3: Editar un libro **
// 📱 App: “Cambia el título del libro con ID 2 a *Rayuela*.”
// 🌐 Servidor (usando `PUT /libros/2`): “Listo, libro actualizado.”

// ** Paso 4: Eliminar un libro **
// 📱 App: “Elimina el libro con ID 1.”
// 🌐 Servidor (usando `DELETE /libros/1`): “Hecho, ya no existe.”


// ** 💻 Ejemplo real en código (JavaScript con `fetch()`) **


// Obtener la lista de libros (GET)
fetch('https://miapi.com/libros')
  .then(res => res.json())
  .then(data => console.log(data));

// Agregar un nuevo libro (POST)
fetch('https://miapi.com/libros', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ titulo: 'El Principito' })
})
  .then(res => res.json())
  .then(data => console.log(data));

// Editar un libro (PUT)
fetch('https://miapi.com/libros/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ titulo: 'Rayuela' })
});

// Eliminar un libro (DELETE)
fetch('https://miapi.com/libros/1', {
  method: 'DELETE'
});
