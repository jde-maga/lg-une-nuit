import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import socket from "../../services/socket";

class Salon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gameState: "newGame",
      lobby: []
    };
  }

  submitName = async () => {
    const { name } = this.state;

    const res = await socket.emit("newUser", name);

    console.log(res);
  };

  startGame = () => {
    socket.emit("startingGame");
  };

  componentDidMount() {
    socket.on("newUser_KO", () => {
      this.setState({ name: "" });
    });
    socket.on("newUser_OK", lobby => {
      this.setState({ gameState: "waitingStart", lobby });
    });
    socket.on("refreshLobby", lobby => {
      this.setState({ lobby });
    });
    socket.on("gameStart", () => {
      const { history } = this.props;

      history.push("/game");
    });
  }

  render() {
    const { name, gameState, lobby } = this.state;

    return (
      <div>
        {gameState === "newGame" ? (
          <div>
            Enter a new name :
            <input
              type="text"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              required
              minLength={3}
            />
            <input type="submit" onClick={this.submitName} />
          </div>
        ) : (
          <div>Player {name}</div>
        )}

        <div>
          Players in lobby :
          {lobby.map(player => (
            <div key={player}>{player}</div>
          ))}
        </div>
        <div>
          <button onClick={this.startGame}>Start Game</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Salon);
