import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark netflix-navbar">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixshows">
              Shows
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixmovies">
              Movies
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixsports">
              Sports
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/netflixtv">
              TV
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/homepage">
              IPL Teams
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/functiondemo1">
              Functiondemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/useStateDemo1">
              useStateDemo1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/useStateDemo2">
             useStateDemo2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/useStateDemo3">
              useStateDemo3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/onchange">
              OnChange
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/subscription">
              Subscription
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
