import React, { Component } from "react";
import "../css/aboutPage.css";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

class CubosAboutPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Cubos - About";
  }

  render() {
    return (
      <Jumbotron className="about" data-testid="jumbotronAboutPage">
        <h1>What is Cubos ?</h1>
        <p>
          Cubos is a 3D modelling Software ! <br />
          It has the advantages of being very easy to use and to learn. <br />
          Also Cubos is Git-friendly, meaning that it does not create or use any
          binary files !
        </p>
        <h1>Why is Cubos ?</h1>
        <p>
          Cubos is a personal project, made to help beginners quickly learn the
          basics of 3D modelling ! <br />
          Cubos will never be as complete as other 3D Modelling services, such
          as Blender or Autodesk Maya. <br />
          But it is lightweight and easy to use for small projects and quick
          modelling.
        </p>
        <h1>How is Cubos ?</h1>
        <p>
          Since you're interested, Cubos was made entirely in C++, using Qt for
          the GUI and OpenGL for 3D rendering ! <br />
          It has been quite a challenging project, but especially interesting,
          so I hope you appreciate the complexity of the software !
        </p>
        <h1>Who is Cubos ?</h1>
        <p>
          Cubos was made by Me, Adonis Stavridis ! Hi! <br />
          I am a student in Computer Science and Computer Graphics at the
          University of Strasbourg ! <br />
          Thank you for taking interest in my Project ! It really means a lot !
        </p>
        <h1>Where is Cubos ?</h1>
        <p>
          Well Cubos can be anywhere ! Even on your machine ! <br />
          Just follow the instructions on the{" "}
          <Link to="/download">Download page</Link> and the software is yours !{" "}
          <br />
          You can also find the Source Code on the{" "}
          <a
            href="https://github.com/Adonis-Stavridis/Cubos-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository
          </a>{" "}
          ! Come say hello !
        </p>
      </Jumbotron>
    );
  }
}

export default CubosAboutPage;
