import React from 'react'
import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom"


export default function Header() {
    return(
    <div className="appbar">
        <img src="/logo_soccer.png" className="logo"/>
        <span className="subtitle">Just like others bet websites, but better.</span>
        <div className="links">
          <Link to="/" className="link">Rodada</Link>
          <Link to="/ranking" className="link">Ranking</Link>
        </div>
    </div>
    )
}