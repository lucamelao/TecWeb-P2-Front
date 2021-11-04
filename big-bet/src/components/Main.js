import React from 'react'
// import SearchPage from './Search/SearchPage'
import { useEffect, useState } from "react";
import axios from "axios";
import Game from './Games/index'

export default function Main() {
    // ---------------------- FINAL ----------------------------
    const [games, setGames] = useState([]); 

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/MATCHES AQUI/")
          .then((res) => setGames(res.data));
      }, []);

    // COM ISSO, DEVE MOSTRAR O JSON DE PARTIDAS DIVERSAS VEZES
    console.log(games);
    // ----------------------- HARD CODED ---------------------------
    axios
    .get("http://localhost:8000/api/matches/")
    .then((res) => console.log(res));
    const games = [
        {
          id: 1,
          title: "ARG X BRA",
          score: "2 X 3",
        },
        {
          id: 2,
          title: "SP X COR",
          score: "3 X 0",
        },
      ];
    // -----------------------------------------------------------
    return(
        <div className="App">
           {games.map((game) => (
            <Game key={`game__${game.id}`} title={game.title}>
                {game.content}
            </Game>
      ))}
        </div>
    )
}
