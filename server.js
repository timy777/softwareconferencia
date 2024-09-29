const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir los archivos estáticos de Angular desde la carpeta dist
app.use(express.static(path.join(__dirname, 'dist/parcial-call')));

// Ruta para manejar todas las peticiones al frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/parcial-call/index.html'));
});

// Manejo de conexiones Socket.IO
io.on('connection', (socket) => {
    console.log('Usuario conectado');

    socket.on('chat message', (msg) => {
        console.log('Mensaje recibido: ' + msg);
        io.emit('chat message', msg); // Enviar mensaje a todos los clientes conectados
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
