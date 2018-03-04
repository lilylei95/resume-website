import React, { Component } from "react";
import profile from "../images/circle_profile.png";
import "../styles/component/home/home.css";

class home extends Component {
  render() {
    return (
      <div className="intro">
        <div className="background-image" />
        <img className="profile-picture" src={profile} alt="Profile Picture" />
        <h1> Lily Lei </h1>
        <br />
        <hr />
        <br />
        <h2>Software/Web Developer</h2>
        <br />
        <hr />
      </div>
    );
  }
}

export default home;
