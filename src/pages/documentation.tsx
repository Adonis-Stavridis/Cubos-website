import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class CubosDocumentationPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Cubos - Documentation";
  }

  render() {
    return (
      <Jumbotron
        className="documentation"
        data-testid="jumbotronDocumentationPage"
      >
        <h1>Documentation</h1>
      </Jumbotron>
    );
  }
}

export default CubosDocumentationPage;
