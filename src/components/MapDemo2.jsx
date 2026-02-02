import React from 'react'

export const MapDemo2 = () => {

    const users = [ 
        {id: 1 , name : "Prince" , age : 21 , gender : "male"},
        {id: 2 , name : "Hemang" , age : 21 , gender : "male"},
        {id: 3 , name : "raj" , age : 23 , gender : "male"}
    ]
  return (
    <div>
        <h1>Map Demo 2</h1>
        <ul>
            {
                users.map((user)=>{
                    return <li key={user.id}>{user.id}-{user.name}-{user.age}-{user.gender}</li>
                })
            }
        </ul>
    </div>
  )
}