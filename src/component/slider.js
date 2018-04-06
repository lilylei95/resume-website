import React, { Component } from "react";
import Slide from "./slide";
import RightArrow from "./arrow-right";
import LeftArrow from "./arrow-left";
import "../styles/component/slider/slider.css";
import SlideInfo from "../info/info.json";

class Slider extends Component {
  componentDidMount() {
    this.setState({ totalSlide: SlideInfo.projects.length });
    setInterval(this.nextSlide, 5000);
  }
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0,
      totalSlide: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    let newSlide = this.state.slideCount + 1;
    if (newSlide >= this.state.totalSlide) {
      this.setState({ slideCount: 0 });
    } else {
      this.setState({ slideCount: newSlide });
    }
  }

  prevSlide() {
    let newSlide = this.state.slideCount - 1;
    if (newSlide < 0) {
      this.setState({ slideCount: this.state.totalSlide - 1 });
    } else {
      this.setState({ slideCount: newSlide });
    }
  }

  render() {
    return (
      <div className="slider">
        <Slide slide={SlideInfo.projects[this.state.slideCount]} />
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow prevSlide={this.prevSlide} />
      </div>
    );
  }
}

export default Slider;
