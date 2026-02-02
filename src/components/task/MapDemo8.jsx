import React from 'react'

export const MapDemo8 = () => {

    const movies = [
        {id:1 , name : "Satyaprem ki katha" , actor : "Kartik Aaryan" , actress : "Kiara advani" },
        {id:2 , name : "Shiddat" , actor : "Sunny Kaushal" , actress : "Radhika Maddan"},
        {id:3 , name : "Taqdeer " , actor : "Akhil Akkineni" , actress : "Kalyani Priyadarshan"},
        {id:4 , name : "Bhool Bhulaiya 2" , actor : "Kartik Aaryan" , actress : "Kiara advani"},
        {id:5 , name : "KGF" , actor : "Yash" , actress : "Srinidhi shetty "}
    ]

  return (
    <div>
        <h1>Map Demo8</h1>
        <table className='table table-dark'>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTOR</th>
                    <th>ACTRESS</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return <tr style={{backgroundColor:movie.actor=="Kartik Aaryan" && "pink" , textAlign:'center'}}>
                            <td>{movie.id}</td>
                            <td style={{color: movie.name=="KGF" && "green"}}>{movie.name}</td>
                            <td style={{backgroundColor:movie.actor=="Sunny Kaushal" && "grey "}}>{movie.actor}</td>
                            <td>{movie.actress}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
