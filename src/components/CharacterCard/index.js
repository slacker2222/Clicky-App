import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
     
      </div>
      <span onClick={() => props.removeCharacter(props.id)} className="remove">
        
      </span>
    </div>
  );
}

export default FriendCard;
