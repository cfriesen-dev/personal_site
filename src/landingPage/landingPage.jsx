import React from "react";
import { Link } from "react-router";
import "./landingPage.css";
import "../App.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div id="title" className="banner">
        <h1 className="banner-title">Chris Friesen</h1>
        <h4>
          <p className="text">
            Welcome to my corner of the internet. Software engineer building
            security conscious architecture. Find me on&nbsp;
            <a href="https://github.com/cfriesen-dev">Github</a>&nbsp;and&nbsp;
            <a href="https://www.linkedin.com/in/cfriesen/">LinkedIn</a>
          </p>
          <p>Here are some of my dabbles others might find interesting:</p>
        </h4>

        <nav>
          <ul className="nav text">
            <li className="link-underline">
              <Link to="/phishing">Phishing</Link>
            </li>
            <li className="link-underline">
              <Link to="/fingerprinting">Fingerprinting</Link>
            </li>
            <li className="link-underline">
              <Link to="/anonymity">Anonymity</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
