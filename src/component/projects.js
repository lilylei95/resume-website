import React, { Component } from "react";
import Slider from "./slider";
import "../styles/component/project/project.css";

class project extends Component {
  render() {
    return (
      <div className="project-container">
        <p className="project-container-title">Work Experience/Projects</p>
        <Slider />
      </div>
    );
  }
}

export default project;
