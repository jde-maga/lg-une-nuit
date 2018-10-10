import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import socket from "../../services/socket";

class Game extends Component {
  state = {
    message: "La partie va commencer"
  };

  componentDidMount() {
    socket.on("refreshMessage", message => {
      this.setState({ message });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <>
        <div>Game start</div>
        <h2>{message}</h2>
        <div>Joueurs</div>
        {}
      </>
    );
  }
}

export default Game;
