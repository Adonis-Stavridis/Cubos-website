import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import CubosNavbar from "./components/cubosNavbar";
import CubosPage from "./components/cubosPage";
import CubosHomePage from "./pages/home";
import CubosAboutPage from "./pages/about";
import CubosDocumentationPage from "./pages/documentation";
import CubosDownloadPage from "./pages/download";

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
