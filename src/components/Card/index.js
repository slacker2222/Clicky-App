import React from "react";
import "./style.css";

const Card = props => (
    <div className="imgCard">
    <img alt={props.name} src={"https://glacial-oasis-89629.herokuapp.com/" + props.images} id={props.id}  onClick = {() => props.shufflePics(props.id)} className='shufflePics'/>

    </div>
)

export default Card;