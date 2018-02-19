import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/component/sideNav/sideNav.css";

class sideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <p className="side-nav-item">
          <Link to="/" className="side-nav-item-name">
            Home
          </Link>
        </p>
        <p className="side-nav-item">
          <Link to="/resume" className="side-nav-item-name">
            Resume
          </Link>
        </p>{" "}
        <p className="side-nav-item">
          <Link to="/projects" className="side-nav-item-name">
            Projects
          </Link>
        </p>{" "}
        <p className="side-nav-item">
          <Link to="/contact" className="side-nav-item-name">
            Contact Me
          </Link>
        </p>
      </div>
    );
  }
}

export default sideNav;
