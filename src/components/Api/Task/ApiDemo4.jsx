import axios from 'axios'
import React, { useState } from 'react'
import "..//Task/ApiDemo4.css"
import { Link } from 'react-router-dom'

export const ApiDemo4 = () => {

    const [movies, setMovies]  =  useState([])


    const Movies = async() => {

        const response = await axios.get(`https://www.omdbapi.com/?s=Avengers&apikey=4859d81e`)
        console.log(response);
        console.log(response.data);
        setMovies(response.data.Search)
    }

  return (
    <div className='movie-page' style={{textAlign:'center'}}>
        <h1>Avenger Movies</h1>
        <button onClick={()=>{Movies()}}>Show all movies</button>
        
        <div className='container'>
            {
                movies.map((movie)=>{
                    return(

                        <div key={movie.imdbID} className='movie'>
                            <img src={movie.Poster}  alt={movie.Title} />

                            <div>
                               <h4> {movie.Title}</h4> <Link to={`/moviedetails/${movie.imdbID}`} >
                                <button>Details..</button>
                               </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
       

    </div>
  )
}
