import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  
      <div className="img-container"  value={props.id} onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} src={props.image} />
     
     </div>
    
  );
}

export default FriendCard;
