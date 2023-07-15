import React, { useState } from "react";
import cancel from "../../img/cancel.png";
import acceptDisabled from "../../img/acceptDisabled.png";
import accept from "../../img/accept.png";

function Popup(props) {
  const [input, setInput] = useState("");

  return (
    <div className="popup-card">
      <h1 className="insert-text">{props.title}</h1>
      <h2 className="insert-title">{props.description}</h2>
      <h2 className="insert-password insert-title">{props.insertPassword}</h2>
      {props.insertPassword === "Inserte contraseña:" ? (
        <input
          className="form-control"
          type="password"
          name="add_title"
          id="input-text"
          onChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <textarea
          className="form-control"
          type="text"
          name="add_title"
          id="input-text"
          onChange={(e) => setInput(e.target.value)}
        />
      )}
      <div>
        <img
          onClick={props.onClicked}
          className="cancel-button"
          src={cancel}
          alt=""
        />
        {input === "" ? (
          <img className="accept-button" src={acceptDisabled} alt="" />
        ) : (
          <img className="accept-button" src={accept} alt="" />
        )}
      </div>
    </div>
  );
}

export default Popup;
