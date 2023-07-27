import React, {useState} from "react"
import "./ExamBuilder.css"
import ExamPreview from "./ExamPreview/ExamPreview";
import "./ExamPreview/ExamPreview.css"
import Bar from "./lateral_bar";
import Title from "./title";


let n = 3;
let x = 1;
const ExamBuilder = () => {

const [question, setQuestion] = useState("Modifica la Pregunta")

const [answ1, setAnswer1] = useState("Modifica la Respuesta")
const [answ2, setAnswer2] = useState("Modifica la Respuesta")
const [answ3, setAnswer3] = useState("Modifica la Respuesta")
const [answ4, setAnswer4] = useState("Modifica la Respuesta")

const handleSubmit = (newQuestion) => {
    setQuestion(newQuestion);
}

const handleA1 = (newAnswer1) => {
    setAnswer1(newAnswer1);
}
const handleA2 = (newAnswer2) => {
    setAnswer2(newAnswer2);
}
const handleA3 = (newAnswer3) => {
    setAnswer3(newAnswer3);
}
const handleA4 = (newAnswer4) => {
    setAnswer4(newAnswer4);
}

return(<div className={"appContainer"}>

        <div className="Exam-builder-container">
        <Bar />
            <div className="container-left">
                <Title subtheme={`Subtema ${x}:`}></Title>


                <div className="exam">
                    <form className="question" onSubmit={handleSubmit}>
                        <h2>Pregunta {x}</h2>
                        <input type="text" placeholder="Modifica la Pregunta" value={question} onChange={(e) => setQuestion(e.target.value)}></input>
                        <button type="submit" className="nQ-btn">Guardar</button>
                    </form>
                    <div className="answers">
                        <h2>Respuestas</h2>
                        <p>1.</p>
                        <input type="text" placeholder="Modifica la Respuesta" value={answ1} onChange={(e) => handleA1(e.target.value)}></input>
                        <p>2.</p>
                        <input type="text" placeholder="Modifica la Respuesta" value={answ2} onChange={(e) => handleA2(e.target.value)}></input>
                        <p>3.</p>
                        <input type="text" placeholder="Modifica la Respuesta" value={answ3} onChange={(e) => handleA3(e.target.value)}></input>
                        <p>4.</p>
                        <input type="text" placeholder="Modifica la Respuesta" value={answ4} onChange={(e) => handleA4(e.target.value)}></input>
                    </div>
                </div>
            </div>

            <div className="container-right">
                <ExamPreview 
                answer1={answ1} 
                answer2={answ2}  
                answer3={answ3}  
                answer4={answ4} 
                questionText={question} 
                answerTitle={`Pregunta ${n}:`}></ExamPreview>
            </div>

        </div>
        </div>)
}
export default ExamBuilder;