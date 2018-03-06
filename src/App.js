import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from "./component/sideNav";
import Home from "./component/home";
import AboutMe from "./component/about-me";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content">
            <Home />
            <AboutMe />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
