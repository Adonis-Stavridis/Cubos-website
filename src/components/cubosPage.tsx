import React, { Component } from "react";
import "../css/cubosPage.css";

class CubosPage extends Component {
  state = {};
  render() {
    return <div className="cubos-page" data-testid="divCubosPage">{this.props.children}</div>;
  }
}

export default CubosPage;
