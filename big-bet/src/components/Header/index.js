import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "./round.css";


export default function Header() {
    return(
    <div className="appbar">
        <img src="/logo-getit.png" className="logo"/>
        <span className="subtitle">Como o Post-it, mas com outro verbo</span>
    </div>    )
}