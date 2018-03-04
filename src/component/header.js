import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../images/linkedin.png";
import "../styles/component/header/header.css";

class header extends Component {
  render() {
    return (
      <div className="header">
        <p className="website-name">
          <Link to="/" className="header-name">
            Lily Lei
          </Link>
        </p>
      </div>
    );
  }
}

export default header;
