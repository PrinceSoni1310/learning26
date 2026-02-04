import React from 'react'

export const MapDemo1 = () => {

    const cars = ["audi" , "BMW" , "Jaguar", "Defender", "mercedes"]

  return (
    <div>
        <h1>Map Demo 1</h1>{
            cars.map((car)=>{
                return <h2 key={car}>{car}</h2> 
            })
        }
    </div>

  )
}
