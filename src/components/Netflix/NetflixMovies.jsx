import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
  const movies = [
    { movieId: 1, movieName: "Dhundhar" },
    { movieId: 2, movieName: "Shiddat" },
    { movieId: 3, movieName: "KGF" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Netflix Movies</h1>
      {movies.map((movie) => {
        return (
          <li key={movie.movieId}>
            <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
          </li>
        );
      })}
    </div>
  );
};
