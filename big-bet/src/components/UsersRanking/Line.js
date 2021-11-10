import React from 'react'
import { Link } from "react-router-dom"

export default function Line(props) {
    const id = props.id
    return(
        <div className = "tableLine">
            <div className = "author">{props.user}</div>
            <div className = "score">{props.total_score}</div>
            <Link to = {`/bet/${id}`} className="check">Check Bet</Link>
        </div>
    )
}