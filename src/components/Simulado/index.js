import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./index.css";


export default function Simulado() {
  const [answer, setAnswer] = useState("")
  useEffect(() => {
    // Obtendo o TOKEN de acesso
    axios.get("https://enigmatic-bayou-56424.herokuapp.com/lucacm1/token",{})
    .then(response => {
      const token = response.data.token;
      // Envia o TOKEN (header) obtido em um POST para obter o object com a mensagem
      axios.post("https://enigmatic-bayou-56424.herokuapp.com/lucacm1/message",{
        "token" : token
      })
      .then((response) => {
        const msg = response.data.mensagem;
        // Modifica a answer mostrada a partir do que é acessado no object
        setAnswer(msg)
      })
    },)
  })
  return(
    <div>{answer}</div>
  )
}
