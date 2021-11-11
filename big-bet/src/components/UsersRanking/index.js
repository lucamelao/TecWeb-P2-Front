import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Line from './Line'
import "./index.css"


export default function UserRanking() {
    const [bets,setBets] = React.useState([])

    useEffect(() => {
        axios
          .get("http://127.0.0.1:8000/calculate_scores/10")
          .then(() => {
              axios
              .get("http://127.0.0.1:8000/get_scores")
              .then((res) => setBets(res.data.bets))
          });
      },[])
    
    return(
      <div className = "tableContainer">
        <div className = "tableHead">
        <div className = "tableTitle">Ranking de apostadores</div>
        </div>
        <div className = "headersFather">
          <div className = "headers">
            <div className="u">
              <div>User</div>
            </div>
            <div className="s">Score</div>
            <div className="b">Bet</div>
          </div>
          {bets.map(bet => 
            <Line key={bet.user} id={bet.id} user={bet.user} total_score={bet.total_score}/>
          )}
        </div>
      </div>
    )
}