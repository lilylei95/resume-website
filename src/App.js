import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/header";
import SideNav from "./component/sideNav";
import Home from "./component/home";
import AboutMe from "./component/about-me";
import FindMe from "./component/find-me";

import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content">
            <Home />
            <AboutMe />
            <FindMe />
          </div>
        </div>
      </Router>
    );
  }
}
//           <SideNav />
//           <Header />
export default App;
