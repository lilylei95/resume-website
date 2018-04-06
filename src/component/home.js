import React, { Component } from "react";
import profile from "../images/circle_profile.png";
import LinkedIn from "../images/In-Black-66px-TM.png";
import GitHub from "../images/GitHub-Mark-64px.png";
import "../styles/component/home/home.css";

class home extends Component {
  render() {
    return (
      <div className="intro">
        <div className="background-image" />
        <img className="profile-picture" src={profile} alt="Profile" />
        <h1> Lily Lei </h1>
        <br />
        <hr />
        <br />
        <h2>Software/Web Developer</h2>
        <br />
        <hr />
        <div className="connect-with-me">
          <a className="logo" href="https://www.linkedin.com/in/lilylei95/">
            <img className="image-logo" src={LinkedIn} alt="linkedin-logo" />
          </a>
          <a className="logo" href="https://github.com/lilylei95">
            <img className="image-logo" src={GitHub} alt="github-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default home;
