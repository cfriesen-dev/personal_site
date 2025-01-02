import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class NavMenu extends React.Component {
  render() {
    return (
      <div>
        <nav id="nav-menu">
          <ul className="nav">
            <li>
              <Link to="/">
                <h1 className="banner-title">Chris Friesen</h1>
              </Link>
            </li>
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

export default NavMenu;
