import React from 'react'

export const MapDemo4 = () => {

    const cities = [
        {id:1 , city:"ahmedabad" , population : 6000000 , AQI :200},
        {id:2 , city:"Delhi" , population : 8000000 , AQI :600},
        {id:3 , city:"Simla" , population : 1000000 , AQI :100}
    ]

  return (
    <div>
        <h1>Map Demo4</h1>
        <table border="2px solid black" style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CITY</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                </tr>
            </thead>
            <tbody>
                    {
                        cities.map((city)=>{
                          return  <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.city}</td>
                                <td>{city.population}</td>
                                <td>{city.AQI}</td>
                            </tr>
                        })
                    }           
            </tbody>
        </table>

    </div>
  )
}
