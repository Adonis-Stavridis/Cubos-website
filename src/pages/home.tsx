import React, { Component } from 'react';

class CubosHomePage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Cubos";
  }

  render() {
    return <h1>Home Page</h1>;
  }
}

export default CubosHomePage;
