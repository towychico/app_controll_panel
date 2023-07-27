import React from "react";
import Questions from "./questions";


let n = 1;
const Title = (props) => {
    return(
        <div>
            <h1>{props.subtheme}</h1>
            <div className="question-bar">
                <Questions number={`${n}`}/>
                
            </div>
        </div>
    );
}

export default Title;