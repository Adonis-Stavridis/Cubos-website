import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.css";
import CubosNavbar from "./cubosNavbar";
import CubosPage from "./cubosPage";
import CubosHomePage from "../pages/home";
import CubosAboutPage from "../pages/about";
import CubosDocumentationPage from "../pages/documentation";
import CubosDownloadPage from "../pages/download";

class App extends Component {
  state = {};
  render() {
    return (
      <HashRouter>
        <CubosNavbar />
        <CubosPage>
          <Switch>
            <Route path="/" exact component={CubosHomePage}></Route>
            <Route path="/about" exact component={CubosAboutPage}></Route>
            <Route
              path="/documentation"
              exact
              component={CubosDocumentationPage}
            ></Route>
            <Route path="/download" exact component={CubosDownloadPage}></Route>
            <Route component={CubosHomePage}></Route>
          </Switch>
        </CubosPage>
      </HashRouter>
    );
  }
}

export default App;
