import React from "react";
import "../styles/component/slider/arrow.css";

const LeftArrow = props => {
  return (
    <div onClick={props.prevSlide} className="back-arrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
