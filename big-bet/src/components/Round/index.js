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

    const postBet = async () => {
        console.log(bet)
        const json = JSON.stringify(bet)
        return(
            axios.post("http://127.0.0.1:8000/post_bet", json)
            .then((res) => {
                console.log(res)
            }, (err) => {
                console.log(err);
        })
    )

    }
    return(
        <div className="roundContainer">
            Username:<input  defaultValue={bet.user} onChange={e =>  {
                  dispatch({type:"USER", newUser:e.target.value})
            }} />
                {games.length === 0 ? <div>Loading...</div> : <div className = "round-info"> JOGOS DA {round}</div>}
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
            <Button type="button" onClick={postBet}>Submit</Button>{' '}
        </div>
    )
}
