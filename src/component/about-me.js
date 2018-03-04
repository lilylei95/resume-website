import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../images/linkedin.png";
import "../styles/component/about-me/about-me.css";

class aboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <h1 className="about-text">About</h1>
        <p className="about-me-text">
          Las Vegas born and raised. I am a graduate student from University of
          Nevada, Las Vegas with a Bachelor of Science in Computer Science. I am
          trying to purse a career in Softwre/Web Developement. I have frontend
          experience with using Javascript and ReactJS framework. For the
          backend, I am experienced with Javascript, C/C++, Java, and Python. I
          also have experience with SQL and MariaDB for database.
        </p>
        <br />
        <div>put github and linkedin logo here</div>
      </div>
    );
  }
}
export default aboutMe;
