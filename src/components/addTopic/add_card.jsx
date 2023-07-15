import React, { useState } from "react";
import add from "../../img/add.png";
import Popup from "./popup";

function Add() {
  const [showAdd, setShowAdd] = useState(false);

  function handleClickShow() {
    setShowAdd(true);
  }

  function handleClickNotShow(show) {
    setShowAdd(false);
    return 0;
  }

  return (
    <div>
      {showAdd && (
        <Popup
          show="showAdd"
          onClicked={handleClickNotShow}
          title="Añadir Tema"
          description="Inserte título:"
          insertPassword=""
        />
      )}
      <div className="add-tema" onClick={handleClickShow}>
        <img className="add-img" src={add} alt="" />
        <h2 className="add-topic">Añadir Tema</h2>
      </div>
    </div>
  );
}

export default Add;
