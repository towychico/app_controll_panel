import React from "react";
import home from "../../img/home.png";
import exit from "../../img/exit.png";

function Bar() {
  return (
    <div className="lateral-bar">
      <img className="bar-img home-img" src={home} alt="" />
      <img className="bar-img exit-img" src={exit} alt="" />
    </div>
  );
}

export default Bar;
