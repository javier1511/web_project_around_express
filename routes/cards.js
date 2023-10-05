const express = require('express');
const fs = require('fs');
const path = require('path');
// Importar el módulo path
const router = express.Router();

// Ruta para obtener la lista de usuarios
router.get('/', (req, res) => {
  // Construir la ruta al archivo JSON usando path.join
  const filePath = path.join(__dirname, '..', 'data', 'cards.json');

  // Leer el archivo JSON y enviarlo como respuesta
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).json({ error: 'No se pudo obtener la lista de tarjetas' });
      return;
    }

    // Analizar el contenido JSON y enviarlo como respuesta
    const cards = JSON.parse(data);
    res.json(cards);
  });
});

module.exports = router;
