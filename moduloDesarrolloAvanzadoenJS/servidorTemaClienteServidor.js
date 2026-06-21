const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
    res.send('¡Hola desde el servidor!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));


app.use(express.json()); // necesario para leer JSON del body

app.post('/usuario', (req, res) => {
    const { nombre, edad } = req.body;
    res.send(`Usuario recibido: ${nombre}, ${edad} años`);
});