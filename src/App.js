import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/header";
import SideNav from "./component/sideNav";
import Home from "./component/home";
import Resume from "./component/resume";
import Projects from "./component/projects";
import Contact from "./component/contact";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <SideNav />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
