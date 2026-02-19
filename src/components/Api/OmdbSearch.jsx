import axios from 'axios'
import React, { useState } from 'react'

export const OmdbSearch = () => {

    const [movies , setMovies]  = useState([])

    const searchMovie = async() => {

        const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=4859d81e&s=Avengers`)
        console.log(response); // axios object
        console.log(response.data); // api response
        setMovies(response.data.Search)       
    } 

  return (
    <div style={{textAlign:'center'}}>
        <h1> Omdb movie search </h1>
        <button onClick={()=> {searchMovie()}}>GET Movie Data</button>

        <table className='table'>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=> {
                        return(
                            <tr>
                                <td>{movie.imdbID}</td>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>
                                    <img src={movie.Poster} style={{height:'150px',width:'150px'}} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
