import React, { Component } from "react";
import LinkedIn from "../images/linkedin.png";

class findMe extends Component {
  render() {
    return (
      <div className="find-me-container">
        <p> test </p>
        <div className="linkedin">
          <img src={LinkedIn} />
        </div>
      </div>
    );
  }
}

export default findMe;
