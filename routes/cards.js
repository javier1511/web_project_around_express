const express = require('express');
const fs = require('fs');
const router = express.Router();

// Ruta para obtener la lista de usuarios
router.get('/', (req, res) => {
  // Leer el archivo JSON y enviarlo como respuesta
  fs.readFile('./data/cards.json', 'utf8', (err, data) => {
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
