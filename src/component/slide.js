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
      <div className="black-mask">
        <div className="slide-bottom">
          <a className="slide-title" href={props.slide.link}>
            {props.slide.title}
          </a>
        </div>
      </div>
    </div>
  );
};

// <div className="slide-text">{props.slide.text}</div>;

export default Slide;
