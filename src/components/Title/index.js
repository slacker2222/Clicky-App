import React from "react";
import "./title.css";

function Title(props) {
    return <div className="gameText">
    <h1 className="title">The Gilligan Click Game!</h1>
    <h4 className="info"> Try to click on all 12 images without clicking the same image twice</h4>
    <h3 className="score">Your Score: {props.total}</h3>
        <h3 className="message">{props.message}</h3>
        
    </div>
}

export default Title;