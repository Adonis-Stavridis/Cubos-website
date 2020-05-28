import React, { Component } from "react";

class CubosAboutPage extends Component {
  state = { progress: 50 };

  componentDidMount() {
    document.title = "Cubos - About";
  }

  render() {
    return <h1>About Page</h1>;
  }
}

export default CubosAboutPage;
