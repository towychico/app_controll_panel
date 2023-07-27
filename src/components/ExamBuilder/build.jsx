import React from "react";

const Build = (props) => {

    return(
        <div className="exam">
            <div className="question">
                <h2>{props.question}</h2>
                <input type="text" placeholder="Modifica la Pregunta"></input>
            </div>
            <div className="answers">
                <h2>Respuestas</h2>
                <p>1.</p>
                <input type="text" placeholder="Modifica la Respuesta"></input>
                <p>2.</p>
                <input type="text" placeholder="Modifica la Respuesta"></input>
                <p>3.</p>
                <input type="text" placeholder="Modifica la Respuesta"></input>
                <p>4.</p>
                <input type="text" placeholder="Modifica la Respuesta"></input>
            </div>
        </div>
    );
}

export default Build;