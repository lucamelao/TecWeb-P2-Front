import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"


export default function Info(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api-big-bet.herokuapp.com/get_user_bet/${props.id}`)
          .then((res) => setData(res.data.bet.rounds[0].fixtures))
    },[])
    
    return(
      <div className = "hist"> 
      <div className = "historicContainer">
      <div className = "label">Bet Historic</div>
        {data.map((d) => 
          (
          <div className = "line">
            <div className = "team-result">
            <div>{d.home_team}</div>
            <div>{d.score.home_score}</div>
            </div>
            <div>X</div>
            <div className = "team-result">
            <div>{d.away_team}</div>
            <div>{d.score.away_score}</div>
            </div>
            <div className = "points">
            <div>{d.fixture_score} pts</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}