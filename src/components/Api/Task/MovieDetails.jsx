import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import "../Api/Task/ApiDemo4.css"
import "..//Task/ApiDemo4.css"

export const MovieDetails = () => {

    const {id} = useParams();
    const {name} = useParams();

    const [detail , setDetail] = useState({})

    useEffect(()=>{
        Details()
    },[id])

    const Details = async()=>{

        const res = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4859d81e`)
        setDetail(res.data)

    }

  return (
    <div className='details' style={{textAlign:'center'}}>
        {/* <h1>MovieDetails</h1> */}

        <h1>{detail.Title}</h1>

        <img src={detail.Poster} alt={detail.Title} />

        <p><b>Actors :</b>{detail.Actors}</p>
        <p><b>Director :</b>{detail.Director}</p>
        <p><b>Writer :</b>{detail.Writer}</p>
        <p><b>Runtime :</b>{detail.Runtime}</p>
        <p><b>Language :</b>{detail.Language}</p>
        <p><b>Released :</b>{detail.Released}</p>
        <p><b>Rated :</b>{detail.Rated}</p>
        <p><b>Year :</b>{detail.Year}</p>
        <p><b>IMDB-Rating :</b>{detail.imdbRating}</p>
        <p><b>Box-Office :</b>{detail.BoxOffice}</p>
    </div>
  )
}
