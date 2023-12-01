// server.js
const express = require('express');
const http = require('http');
const {io} = require('socket.io-client');

const app = express();
const server = http.createServer(app);

// Port local from your server 
const ioPort = 3300;

const socket = io(`http://localhost:${ioPort1}`);

// NOTES: "connect" = key is sent from emit server to client
socket.on('connect', (socket) => {
  console.log(socket);
  console.log('Client connected to Socket.IO server on port', ioPort);
});

// Start the server
const serverPort = 8007;
server.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
