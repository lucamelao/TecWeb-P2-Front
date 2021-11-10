import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Info(props) {

    const [data, setData] = useState();

    useEffect(() => {
        axios
          .get(`http://127.0.0.1:8000/get_user_bet/${props.id}`)
          .then((res) => setData(JSON.stringify(res.data.bet.rounds[0].fixtures)))
    },[])
    
    return(
      <div className = "tableContainer">
        {data}
      </div>
    )
}