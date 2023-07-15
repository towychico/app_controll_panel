import React from "react";
import Bar from "./lateral_bar";
import Card from "./topic_card";
import Add from "./add_card";
import Save from "./save";

function Home() {
  return (
    <div>
      <Bar />
      <h1>Temas</h1>
      <div className="display-cards">
        <Card />
        <div></div>
        <Add />
      </div>
      <Save />
    </div>
  );
}

export default Home;
