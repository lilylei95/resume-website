import React from "react";
import "../styles/component/slider/slider.css";

const Slide = props => {
  let background = {
    backgroundImage: `url(${props.slide.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div style={background} className="slide">
      <div className="slide-title">{props.slide.title}</div>
      <div className="slide-text">{props.slide.text}</div>
    </div>
  );
};

export default Slide;
