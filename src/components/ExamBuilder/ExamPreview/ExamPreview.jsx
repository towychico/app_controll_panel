import React from "react"
import "./ExamPreview.css"
import Control from "./control";
import Nav from "./nav"
const ExamPreview = (props) => {
    return(<div className={"exam-preview-container"}>
        <div className="nav_container">
            <Nav />
        </div>
        <div className="text_container">
            <h2>{props.answerTitle}</h2>
            <p>{props.questionText}</p>
        </div>
        <div className="answers_container">
            <div className="answer"><p>{props.answer1}</p></div>
            <div className="answer"><p>{props.answer2}</p></div>
            <div className="answer"><p>{props.answer3}</p></div>
            <div className="answer"><p>{props.answer4}</p></div>

        </div>
        <div className="controls">
            <Control />
        </div>

    </div>)
}
export default ExamPreview;