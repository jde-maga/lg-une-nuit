const socketio = require('socket.io');

const server = require('./server');

const io = socketio(server);

io.on('connection', (socket) => {
  const userData = {};

  socket.on('newUser', (user) => {
    if (typeof (user) !== 'string' || user.length < 3) {
      console.log("ko", user)
      return socket.emit('newUser_KO');
    }

    userData.name = user;
    userData.id = socket.id;

    console.log("ok")
    return socket.emit('newUser_OK');
  });

  console.log('now listening sockets');
});
