import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

export const ApiDemo5 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSchema = {
    nameValidation: {
      required: {
        value: true,
        message: "Please Enter movie name*",
      },
    },
  };

  // const submitHandler = (data) => {
  //   console.log(data);
  // };

  // const [name, setName] = useState();
  const [movies, setMovies] = useState([]);

  const submitHandler = async (data) => {
    const response = await axios.get(
      ` http://www.omdbapi.com/?&s=${data.moviename}&apikey=4859d81e`,
    );
    console.log(response.data.Search);

    setMovies(response.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>AppDemo5</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>
          <b>Movie : </b>
        </label>
        <input
          type="text"
          placeholder="Enter movie name"
          {...register("moviename", validationSchema.nameValidation)}
        />
        {errors.moviename?.message}
        <br />
        <button type="submit">Search</button>
      </form>

     
      <table className="table table-dark">
        <thead>
          <tr>
            <th>IMDB ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Poster</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {
          movies.map((movie)=>{
           return <tr key={movie.imdbID}>
               <td>{movie.imdbID}</td>
               <td>{movie.Title}</td>
               <td>{movie.Year}</td>
                <td>
                  <img src={movie.Poster} style={{height:'150px',width:'150px'}} />
                 </td>
                 <td><Link to={`/moviedetails/${movie.imdbID}`}><button>details..</button></Link></td>
            </tr>
          })
        }
        </tbody>
      </table>
    </div>
  );
};
