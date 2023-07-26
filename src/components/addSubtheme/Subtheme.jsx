import React from "react";
import Bar from "./lateral_bar";
import Card from "./subtheme_card";
import Add from "./add_card";
import Save from "./save";

function App() {
  return (
    <div>
      <Bar />
      <h1>Tema 1</h1>
      <div className="display-cards">
        <Card />
        <div></div>
        <Add />
      </div>
      <Save />
    </div>
  );
}

export default App;
