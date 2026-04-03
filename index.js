const express = require("express");
const app = express();

app.use(express.json());

let notas = [];

// Obtener notas
app.get("/notas", (req, res) => {
  res.json(notas);
});

// Crear nota
app.post("/notas", (req, res) => {

  if (!req.body.texto) {
    return res.status(400).json({ error: "Texto requerido" });
  }

  const nuevaNota = {
    id: Date.now(),
    texto: req.body.texto
  };

  notas.push(nuevaNota);
  res.json(nuevaNota);
});


