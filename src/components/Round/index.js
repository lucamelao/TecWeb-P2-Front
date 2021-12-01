import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Game from '../Game';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./round.css";
import { useSelector, useDispatch } from 'react-redux'


export default function Round() {

    let bet = useSelector(state => state)
    const dispatch = useDispatch()

    const [games, setGames] = useState([]); 
    const [round,setRound] = useState("");
    const header = {
        "Authorization":"Bearer live_6cb4e5666f9c190794fd4e9ac930ca"
    }

    useEffect(() => {
        axios
          .get("https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/10", {headers : header})
          .then((res) => {
              setGames(res.data.partidas);
              setRound(res.data.slug)
          });
      }, []);

    const postBet = async () => {
        console.log(bet)
        const json = JSON.stringify(bet)
        return(
            axios.post("https://api-big-bet.herokuapp.com/post_bet", json)
            .then((res) => {
                console.log(res)
            }, (err) => {
                console.log(err);
        })
    )

    }
    return(
        <div className="roundContainer">
            <div className = "user">
            <div className = "dot">Username:</div>    
            <input  className = "type"defaultValue={bet.user} onChange={e =>  {
                  dispatch({type:"USER", newUser:e.target.value})
            }} />
            </div>
            <div className = "rules">*Confira as regras ao final da página.</div>
                {games.length === 0 ? <div>Loading...</div> : <div className = "round-info"> Jogos da {round}</div>}
                <div className="fixturesContainer">
                    <div className="fix">
                    {games.map((game) => (
                        <Game key={game.slug} 
                        home={game.time_mandante.sigla} 
                        away={game.time_visitante.sigla} 
                        logoHome={game.time_mandante.escudo}
                        logoAway={game.time_visitante.escudo}
                        slug={game.slug}
                        />
                        ))}
                    </div>
            </div>
            <Button type="button" onClick={postBet} className = "btn">Submit</Button>{' '}
            <div className = "rulesBoard">
                REGRAS DAS APOSTAS
                <li>Após clicar em "lock bet", sua aposta será salva, e não poderá mais ser alterada.</li>
                <li>Pontuação por acerto do resultado: 3 pontos.</li>
                <li>Pontuação por acerto do placar: 5 pontos.</li>
                <li>Ao clicar em "Submit", seus palpites serão salvos e validados.</li>
            </div>
        </div>
    )
}
