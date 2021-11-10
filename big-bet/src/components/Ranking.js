import React from 'react'
import Header from "./Header"
import UserRanking from "./UsersRanking"
import "./UsersRanking/index.css"

export default function Ranking() {
  return(
    <div>
        <Header />
        <div className = "cont">
        <UserRanking />
        </div>
    </div>
  )
}
