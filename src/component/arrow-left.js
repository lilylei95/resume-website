import React from "react";
import "../styles/component/slider/arrow.css";

const LeftArrow = props => {
  return (
    <div onClick={props.prevSlide} className="back-arrow">
      <i className="arrow fa fa-arrow-left fa-3x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
