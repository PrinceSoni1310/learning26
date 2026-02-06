import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="container text-center mt-5" style={{textAlign:'center'}}>
      <div className="card shadow p-4">
      <h1 className="mb-4 text-primary">Welcome to IPL Teams</h1>
      {
        <ul style={{listStyle:'none'}}>
          <li >
            <Link to={"/teams"}  className="btn btn-success btn-lg" >Teams</Link>
          </li>
        </ul>
      }
      </div>  
    </div>
  )
}
