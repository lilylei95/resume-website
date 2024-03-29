import React from "react";
import "../styles/component/slider/arrow.css";

const RightArrow = props => {
  return (
    <div onClick={props.nextSlide} className="next-arrow">
      <i className="arrow fa fa-arrow-right fa-3x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
