const socketio = require("socket.io");

const server = require("./server");

const io = socketio(server);

const GameBoard = require("./GameBoard");

let Board = null;
const lobby = [];

io.on("connection", socket => {
  io.emit("refreshLobby", lobby);

  socket.on("newUser", user => {
    if (typeof user !== "string" || user.length < 3) {
      return socket.emit("newUser_KO");
    }

    lobby.push(user);
    io.emit("refreshLobby", lobby);
    return socket.emit("newUser_OK", lobby);
  });

  socket.on("startingGame", () => {
    Board = new GameBoard(lobby);
    Board.generateRoles();
    io.emit("gameStart");
  });

  console.log("now listening sockets");
});
