import React, { Component } from 'react';

class CubosDocumentationPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Cubos - Documentation";
  }

  render() {
    return <h1>Documentation Page</h1>;
  }
}

export default CubosDocumentationPage;
