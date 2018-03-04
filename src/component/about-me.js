import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/component/about-me/about-me.css";

class aboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <div className="about-me-background" />
        <h1 className="about-text">About Me</h1>
        <p className="about-me-text">
          Lily is a Software/Web Developer, with experiences with languages
          Javascript, Python, Java, SQL, HTML, and C/C++. She also have
          experience with MariaDB and MongoDB. Her background is in making
          websites used Javascript and ReactJS, and backend RESTful API by using
          Javascript, NodeJS, Python, and SQL.
        </p>
        <p className="about-me-text">
          Lily is fueled by her passion of creating new applications and
          websites. She is currently interested in learning about Unity3d for
          creating games, C# for game development, and learning game design. She
          is always eager to learn new technologies, and adapt it to her
          application.
        </p>
        <p className="about-me-text">
          Her hunger for knowledge and determination to learning new skills has
          contributed in her senior design project, Convention Logistic Tracker
          (CLT), where she created the all APIs for the phone application and
          the web application to call. CLT has won first place in the senior
          design competition for the Computer Science department.
        </p>
        <p className="about-me-text">
          Meanwhile, she is creating other projects such as Pong using Unity3d,
          another Pong using HTML and Javascript, a personal website using
          ReactJS and Sass, and an Ebay web scraper using Javascript and NodeJS.
        </p>
        <p className="about-me-text">
          Lily is currently looking for a Software/Web Developer position in Las
          Vegas, Nevada and is always interested in a challenge and learning
          something new. Reach out to lilylei95@hotmail.com to connect.
        </p>
      </div>
    );
  }
}
export default aboutMe;
