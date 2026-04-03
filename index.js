app.post("/notas", (req, res) => {

  if (!req.body.texto) {
    return res.status(400).json({ error: "Texto requerido" });
  }

  const nuevaNota = {
    id: Date.now(),
    texto: req.body.texto,
    fecha: new Date().toISOString()  // agregamos fecha
  };

  notas.push(nuevaNota);
  res.json(nuevaNota);
});


