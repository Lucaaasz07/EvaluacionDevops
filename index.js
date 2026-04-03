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
  const nuevaNota = {
    id: Date.now(),
    texto: req.body.texto
  };

  notas.push(nuevaNota);
  res.json(nuevaNota);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

