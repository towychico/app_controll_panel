import React, { useState } from "react";
import edit from "../img/edit.png";
import trash from "../img/trash.png";
import Popup from "./popup";

function Card() {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  function handleClickShowEdit(show) {
    setShowEdit(true);
  }

  function handleClickNotShowEdit(show) {
    setShowEdit(false);
  }

  function handleClickShowDelete(show) {
    setShowDelete(true);
  }

  function handleClickNotShowDelete(show) {
    setShowDelete(false);
  }

  return (
    <div>
      {showEdit && (
        <Popup
          onClicked={handleClickNotShowEdit}
          title="Editar Título"
          description="Inserte título"
          insertPassword=""
        />
      )}
      {showDelete && (
        <Popup
          onClicked={handleClickNotShowDelete}
          title="Eliminar tema"
          description="Eliminar un subtema es una acción definitiva, no se puede deshacer, debe ingresar su contraseña para proceder."
          insertPassword="Inserte contraseña:"
        />
      )}
      <div className="card">
        <div className="tema">
          <h2 className="topic-name">Subtema 1</h2>
        </div>
        <div className="actions">
          <div className="edit" onClick={handleClickShowEdit}>
            <img className="card-img edit-img" src={edit} alt="" />
          </div>
          <img
            className="card-img trash"
            src={trash}
            alt="borrar"
            onClick={handleClickShowDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
