import React from "react";
import "./game.css"

export default function Game(props) {
  return (
  <div className="games">
    <div className="teamContainer">
      <img className = "shield" src={props.logoHome}/>
      <h3 className="card-title">{props.home}</h3>
    </div>
    
    <h3 className="card-title"> X </h3>
    
    <div className="teamContainer">
      <h3 className="card-title">{props.away}</h3>
      <img className = "shield" src={props.logoAway}/>
    </div>
  </div>
  );
}