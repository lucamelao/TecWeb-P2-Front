import React from 'react'
import Header from './Header'
import Info from './Info'
import { useParams } from "react-router-dom";

export default function Bet() {

  let { id } = useParams();

  return(
    <div>
      <Header/>
      <Info id={id} />
      </div>
  )
}
