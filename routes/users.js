const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Ruta para obtener la lista de usuarios
router.get('/', (req, res) => {
  try {
    // Obtener la ruta completa al archivo JSON utilizando path.join
    const filePath = path.join(__dirname, '..', 'data', 'users.json');
    // Leer el archivo JSON de manera síncrona
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);
    res.json(users);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    res.status(500).json({ error: 'No se pudo obtener la lista de usuarios' });
  }
});

// Ruta para obtener un usuario específico por su ID
router.get('/:id', (req, res) => {
  // Leer el archivo JSON de manera síncrona
  try {
    const filePath = path.join(__dirname, '..', 'data', 'users.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(data);

    // Obtener el ID de los parámetros de la URL
    const userId = req.params.id;

    // Buscar el usuario por su ID
    const foundUser = users.find((user) => user._id === userId);

    if (!foundUser) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    // Enviar el usuario encontrado como respuesta
    res.json(foundUser);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
    res.status(500).json({ error: 'No se pudo obtener la lista de usuarios' });
  }
});

module.exports = router;
