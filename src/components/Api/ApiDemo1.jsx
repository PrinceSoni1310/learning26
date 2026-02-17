import axios from 'axios'
import React, { useState }  from 'react'

export const ApiDemo1 = () => {
    
    const [message, setMessage] = useState("");
    const [data , setData] = useState ([]);

    const getData = async() => {

        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.data);
        setMessage(response.data.message);
        setData(response.data.data); 
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>ApiDemo1</h1>
        <button onClick={()=>{getData()}}>GET</button>
        <h1>Message = {message}</h1>

        {
            data.map ((d)=> {
                  return <li>{d.name}</li>
            })
        }
    </div>
  )
}
