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
        <Jumbotron className="download">
          <div className="download">
            <h1>Download</h1>
            {downloadInfo(osName)}
            <h2>Installation</h2>
            <ul>
              <li>Unzip downloaded folder</li>
              <li>Place files in desired location</li>
              <li>Run the application</li>
            </ul>
          </div>
          <CardDeck className="download">
            <Card
              className={osName === "linux" ? "download active" : "download"}
            >
              <Card.Header className="download">Linux</Card.Header>
              <Card.Img className="download" variant="top" src={linux} />
              <Card.Body>
                <a href={linux} download="linux.png">
                  <Button variant="primary" size="lg" block>
                    Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
            <Card
              className={osName === "windows" ? "download active" : "download"}
            >
              <Card.Header className="download">Windows</Card.Header>
              <Card.Img className="download" variant="top" src={windows} />
              <Card.Body>
                <a href={windows} download="windows.png">
                  <Button variant="primary" size="lg" block>
                    Download
                  </Button>
                </a>
              </Card.Body>
            </Card>
            <Card
              className={osName === "macos" ? " download active" : "download"}
            >
              <Card.Header className="download">Mac OS</Card.Header>
              <Card.Img className="download" variant="top" src={macos} />
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

export function downloadInfo(osName: String): JSX.Element {
  if (osName === "linux" || osName === "windows" || osName === "macos") {
    const os = getOS(osName);
    return (
      <React.Fragment>
        <p data-testid="pDownloadInfo">
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
      <p data-testid="pDownloadInfo">
        Sorry! There are no available versions of this software for Mobile!{" "}
        <br /> You can download any of the available versions, yet it is not
        recommended!
      </p>
    );
  return (
    <p data-testid="pDownloadInfo">
      Sorry! You're Operating System could not be detected. <br /> You can
      download any of the available versions, yet it is not recommended!
    </p>
  );
}

export function setOS(): String {
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

export function getOS(osName: String): String {
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

export function getFile(osName: String): string {
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

export default CubosDownloadPage;
