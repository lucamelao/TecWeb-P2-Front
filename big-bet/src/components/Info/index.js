import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Info(props) {

    const [data, setData] = useState();

    useEffect(() => {
        axios
          .get(`get_user_bet/${props.id}`)
          .then((res) => console.log(res.data))
    },[])
    
    return(
      <div className = "tableContainer">
          {data}
      </div>
    )
}