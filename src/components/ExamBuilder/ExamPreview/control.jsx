import React from "react";
import right from "../imgPrev/right.png";
import left from "../imgPrev/left.png";

function Control() {
  return (
    <div className="bottom-bar">
      <img className="bar-img right-img" src={right} alt="" />
      <img className="bar-img left-img" src={left} alt="" />
    </div>
  );
}

export default Control;