import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Game from '../Game';
import "./round.css";

export default function Round() {

    const [games, setGames] = useState([]); 
    const [round,setRound] = useState("");
    const header = {
        "Authorization":"Bearer live_15eb31904abcf4415c0444bc1a2306"
    }

    useEffect(() => {
        axios
          .get("https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/10", {headers : header})
          .then((res) => {
              setGames(res.data.partidas);
              setRound(res.data.slug)
          });
      }, []);
    return(
        <div className="roundContainer">
                {games.length === 0 ? <div>Loading...</div> : <div> JOGOS DA {round}</div>}
                <div className="fixturesContainer">
                    {games.map((game) => (
                        <Game key={`game__${game.slug}`} 
                        home={game.time_mandante.sigla} 
                        away={game.time_visitante.sigla} 
                        logoHome={game.time_mandante.escudo}
                        logoAway={game.time_visitante.escudo}
                        />
                    ))}
            </div>
        </div>
    )
}
