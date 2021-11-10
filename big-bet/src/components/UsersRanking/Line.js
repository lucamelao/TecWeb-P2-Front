import React from 'react'
import { Link } from "react-router-dom"

export default function Line(props) {
    const id = props.id
    return(
        <div className = "tableLine">
            <div>{props.user}</div>
            <div>{props.total_score}</div>
            <Link to = {`/bet/${id}`} className="link">Bet</Link>
        </div>
    )
}