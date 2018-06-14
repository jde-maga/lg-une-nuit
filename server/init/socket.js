const socketio = require("socket.io");

const server = require('./server');

const io = socketio(server);

io.on('connection', (socket) => {
  const user = {
    id: "ok",
  }
  
  socket.emit('newUser', user);

  console.log("now listening sockets");
});