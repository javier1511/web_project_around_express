const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará la API

// Importar las rutas de users.js y cards.js
const usersRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');

app.use('/cards', cardsRoute);
app.use('/users', usersRoute);

// Ruta para manejar solicitudes no definidas (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
