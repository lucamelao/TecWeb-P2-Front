import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"


export default function Info(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`http://127.0.0.1:8000/get_user_bet/${props.id}`)
          .then((res) => setData(res.data.bet.rounds[0].fixtures))
    },[])
    
    return(
      <div className = "tableContainer">
        {data.map((d) => 
          (
          <div>
            <div>{d.home_team}</div>
            <div>{d.away_team}</div>
            <div>
              <div>{d.score.home_score}</div>
              <div>{d.score.away_score}</div>
            </div>
            <div>{d.fixture_score}</div>
          </div>
        ))}
      </div>
    )
}