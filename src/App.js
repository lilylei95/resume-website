import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./component/home";
import AboutMe from "./component/about-me";
import Projects from "./component/projects";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content">
            <Home />
            <AboutMe />
            <Projects />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
