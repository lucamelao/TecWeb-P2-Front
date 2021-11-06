import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserRanking() {
    const [bets,setBets] = React.useState([])

    useEffect(() => {
        axios
          .get("http://127.0.0.1:8000/calculate_scores/10")
          .then(() => {
              axios
              .get("http://127.0.0.1:8000/get_all")
              .then((res) => setBets(res.data.bets))
          });
      },[])
    
    return(
        <div>{bets.map((bet => {
            return(
                <div>
                    <div>{bet.user}</div> <div>{bet.total_score}</div>
                </div>
            )
        }))}</div>
    )
}