import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Watch = () => {

    const movieName = useParams().name

  return (
    <div style={{textAlign:'center'}}>
        <h1>Watching...{movieName}</h1> 
    </div>
  )
}
