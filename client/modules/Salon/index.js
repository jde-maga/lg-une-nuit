import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from "react-router";
import { Link } from 'react-router-dom';
import socket from '../../services/socket';

class Salon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  submitName = async () => {
    const { name } = this.state;

    const res = await socket.emit('newUser', name);

    console.log(res);
  };


  componentDidMount() {
    socket.on("newUser_KO", () => {
      this.setState({ name: "" });
    }) 
    socket.on("newUser_OK", () => {
      history.push("/tttt");
    })
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        Enter a new name : <input type="text" value={name} onChange={e => this.setState({ name: e.target.value })} required minLength={3} /> <input type="submit" onClick={this.submitName} />
      </div>
    );
  }
}

export default Salon;
