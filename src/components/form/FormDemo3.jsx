import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const {register,handleSubmit} = useForm();
    const [movie , setMovie] = useState({})
    const [isSubmitted ,setisSubmitted] = useState(false)

    const submitHandler = (data)=>{
        console.log(data);
        setMovie(data);
        setisSubmitted(true)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Movie Form</h1>
        <form onSubmit={handleSubmit(submitHandler)} >
            <div>
                <label><b>Movie Name :</b> </label>
                <input type="text" placeholder='Enter Movie Name' {...register("movieName")} />
                <br />
                <label><b>realese Date :</b> </label>
                <input type="datetime-local" placeholder='Enter Movie Name' {...register("releasedate")} />
                <br />
                <label><b>Rating:</b> </label>
                <input type="range" {...register("rating")} />
                <br />
                <label><b>trailer link :</b> </label>
                <input type="url" placeholder='Enter Movie LINK' {...register("trailer")} />
                <br />
                <label><b>Good :</b> </label>
                Yes:<input type="radio" value="yes" {...register("good")} />
                NO:<input type="radio" value="no" {...register("good")} />
<br />
                <input type="submit" />
            </div>
        </form>
        {
            isSubmitted==true &&<div>
                <h1>Movie Name : {movie.movieName}</h1>
                <h1>Realese date : {movie.releasedate}</h1>
                <h1>Rating : {movie.rating}</h1>
                <h1>Trailer Link : {movie.trailer}</h1>
                <h1>Good : {movie.good}</h1>
            </div>
        }
    </div>
  )
}
