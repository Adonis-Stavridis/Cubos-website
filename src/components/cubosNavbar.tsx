import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/cubosNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CubosLogo from "../img/cubos.png";
import GithubLogo from "../img/github.png";

class CubosNavbar extends Component {
  state = {};

  render() {
    return (
      <Navbar variant="dark" sticky="top" expand="lg">
        <Link className="navbar-brand" to="/">
          <img className="img-logo" src={CubosLogo} alt="Cubos Logo" />
          <p>Cubos</p>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/documentation">
              Documentation
            </Link>
            <Link className="nav-link" to="/download">
              Download
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <a
              className="nav-link"
              href="https://github.com/Adonis-Stavridis/Cubos-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
              <img
                className="img-logo"
                id="github-logo"
                src={GithubLogo}
                alt="Github Logo"
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CubosNavbar;
