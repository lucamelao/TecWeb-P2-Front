import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./game.css"
import { useDispatch } from 'react-redux'



export default function Game(props) {

  const dispatch = useDispatch()

  const [active, setActive] = React.useState(true)

  const [fixture, setFixture] = React.useState({
    home: props.home,
    away: props.away,
    score:{home : 0, away : 0},
    slug: props.slug
  })

  const lock = () => {
    setActive(false)
    dispatch({type:"ADD", newItem:fixture})
  }

  return (
  <div className="games">
    <div className="teamContainer">
      <img className = "shield" src={props.logoHome} alt="home logo"/>
      <h3 className="card-title">{props.home}</h3>
      <input 
        defaultValue={fixture.score.home}
        onChange={e =>  {
          setFixture(prev=>{
            return {...prev, score:{...prev.score, home : e.target.value}}
          })
        }}
      />
    </div>
    <div className="teamContainer">
      <img className = "shield" src={props.logoAway} alt="away logo"/>
      <h3 className="card-title">{props.away}</h3>
      <input 
        defaultValue={fixture.score.away}
        onChange={e =>  {
          setFixture(prev=>{
            return {...prev, score:{...prev.score, away : e.target.value}}
          })
        }}
        />
    </div>
    <Button 
      id={props.slug}
      type="button" 
      disabled={!active} 
      vatiant={!active ? "primary": "secondary"}
      onClick={lock}>
        lock bet
    </Button>{' '}
  </div>
  );
}