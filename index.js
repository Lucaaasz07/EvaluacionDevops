const express = require("express");
const app = express();

app.use(express.json());

let notas = [];

// Obtener notas
app.get("/notas", (req, res) => {
  res.json(notas);
});

// Crear nota
const nuevaNota = {
  id: Date.now(),
  texto: req.body.texto,
  fecha: new Date().toISOString()  // <-- Aquí agregas la fecha

};

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

