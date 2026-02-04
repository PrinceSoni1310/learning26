import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Netflix Shows </h1>
        <ul>
          <li>
            <Link to="/watch/farzi" > Farzi </Link>
          </li>
          <li>
            <Link to="/watch/asur" > Asur </Link>
          </li>
          <li>
            <Link to="/watch/scam1992" > Scam 1992 </Link>
          </li>
        </ul>
    </div>
  )
}
