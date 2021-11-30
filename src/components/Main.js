import React, {useEffect, useState} from 'react'
import Round from './Round'
import Header from './Header'
import axios from 'axios'

export default function Main() {

  const [resp, setResp] = useState("")
  useEffect(() => {
    axios.get("https://enigmatic-bayou-56424.herokuapp.com/paulosc4/token",{})
    .then(response => {
      axios.post("https://enigmatic-bayou-56424.herokuapp.com/paulosc4/message",{
        "token" :response.data.token
      })
      .then((response) => {
        setResp(response.data.mensagem)
      })
    },)
  })
  return(
    <div>
      <Header/>
      <Round />
      <div>{resp}</div>
    </div>
  )
}
