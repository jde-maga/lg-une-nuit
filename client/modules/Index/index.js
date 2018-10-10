import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Index extends Component {

  render() {
    return(
      <div>
      <div>bonjour LG</div>
      <Link to="/newgame">Créer une nouvelle partie</Link>
      </div>
    )
  }
};

export default Index;
