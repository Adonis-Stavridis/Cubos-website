import React, { Component } from "react";
import "../css/downloadPage.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import linux from "../img/linux.png";
import windows from "../img/windows.png";
import macos from "../img/macos.png";

class CubosDownloadPage extends Component {
  state = {
    os: setOS(),
  };

  componentDidMount() {
    document.title = "Cubos - Download";
  }

  render() {
    const osName = this.state.os;

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="cubosDownload">
            <h1>Download</h1>
            {downloadInfo(osName)}
            <h2>Installation</h2>
            <ul>
              <li>Unzip downloaded folder</li>
              <li>Place files in desired location</li>
              <li>Run the application</li>
            </ul>
          </div>
          <CardDeck>
            <Card className={osName === "linux" ? "active" : ""} bg="dark">
              <Card.Header>Linux</Card.Header>
              <Card.Img variant="top" src={linux} />
              <Card.Body>
                <a href={linux} download="linux.png">
                  <Button variant="primary" size="lg" block>
                    Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
            <Card className={osName === "windows" ? "active" : ""} bg="dark">
              <Card.Header>Windows</Card.Header>
              <Card.Img variant="top" src={windows} />
              <Card.Body>
                <a href={windows} download="windows.png">
                  <Button variant="primary" size="lg" block>
                    Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
            <Card className={osName === "macos" ? "active" : ""} bg="dark">
              <Card.Header>Mac OS</Card.Header>
              <Card.Img variant="top" src={macos} />
              <Card.Body>
                <a href={macos} download="macos.png">
                  <Button variant="primary" size="lg" block>
                    Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </CardDeck>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

function setOS(): String {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "macos";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "mobile";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "windows";
  } else if (/Android/.test(userAgent)) {
    os = "mobile";
  } else if (!os && /Linux/.test(platform)) {
    os = "linux";
  } else {
    os = "unknown";
  }

  return os;
}

function getOS(osName: String): String {
  switch (osName) {
    case "linux":
      return "Linux";
    case "windows":
      return "Windows";
    case "macos":
      return "Mac OS";

    default:
      return "";
  }
}

function getFile(osName: String): string {
  switch (osName) {
    case "linux":
      return linux;
    case "windows":
      return windows;
    case "macos":
      return macos;

    default:
      return "";
  }
}

function downloadInfo(osName: String): JSX.Element {
  if (osName === "linux" || osName === "windows" || osName === "macos") {
    const os = getOS(osName);
    return (
      <React.Fragment>
        <p>
          According to your Operating System, it is recommended you download the{" "}
          <b>{os}</b> version of Cubos!
        </p>
        <a href={getFile(osName)} download={osName + ".png"}>
          <Button variant="primary" size="lg" block>
            Download for {os}
          </Button>
        </a>
        <br />
      </React.Fragment>
    );
  }
  if (osName === "mobile")
    return (
      <p>
        Sorry! There are no available versions of this software for Mobile!{" "}
        <br /> You can download any of the available versions, yet it is not
        recommended!
      </p>
    );
  return (
    <p>
      Sorry! You're Operating System could not be detected. <br /> You can
      download any of the available versions, yet it is not recommended!
    </p>
  );
}

export default CubosDownloadPage;
