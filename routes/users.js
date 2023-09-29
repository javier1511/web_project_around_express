const express = require('express');
const fs = require('fs');
const router = express.Router();

// Ruta para obtener la lista de usuarios
router.get('/', (req, res) => {
  // Leer el archivo JSON y enviarlo como respuesta
  fs.readFile('./data/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).json({ error: 'No se pudo obtener la lista de usuarios' });
      return;
    }

    // Analizar el contenido JSON y enviarlo como respuesta
    const users = JSON.parse(data);
    res.json(users);
  });
});



// Ruta para obtener un usuario específico por su ID
router.get('/:id', (req, res) => {
    // Leer el archivo JSON y enviar el usuario con el ID correspondiente como respuesta
    const userId = req.params.id; // Obtener el ID de los parámetros de la URL
  
    fs.readFile('./data/users.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        res.status(500).json({ error: 'No se pudo obtener la lista de usuarios' });
        return;
      }
  
      // Analizar el contenido JSON
      const users = JSON.parse(data);
  
      // Buscar el usuario por su ID
      const user = users.find((user) => user._id === userId);
  
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }
  
      // Enviar el usuario encontrado como respuesta
      res.json(user);
    });
  });
  



module.exports = router;
