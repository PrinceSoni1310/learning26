import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const [users , setUsers] = useState(["Prince" , "Hemang"]);
    const addUser = () => {
        setUsers([...users , "Dhrudip"])
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>UseState Demo 3</h1>
        {
            users.map((u)=>{
                return <h1>{u}</h1>
            })
        }
        <button onClick={addUser}>push</button>
    </div>
  )
}
