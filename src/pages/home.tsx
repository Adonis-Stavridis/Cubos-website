import React, { Component } from "react";
import "../css/homePage.css";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

class CubosHomePage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Cubos";
  }

  render() {
    return (
      <Jumbotron className="home" data-testid="jumbotronHomePage">
        <h1>Welcome!</h1>
        <p>
          Cubos is an Easy-to-Use, Git-friendly, 3D modelling software ! <br />
        </p>
        <Link className="btn btn-primary" to="/download">
          Download now !
        </Link>
      </Jumbotron>
    );
  }
}

export default CubosHomePage;
