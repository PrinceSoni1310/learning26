import React from 'react'
import { Link } from 'react-router-dom';

export const Teams = () => {
   const teams = [
  {
    teamId: 1,
    teamName: "CSK",
    captain: "MS Dhoni",
    trophy: 5,
    bestBatsman: "Ruturaj Gaikwad",
    bestBowler: "Ravindra Jadeja",
    wicketKeeper: "MS Dhoni"
  },
  {
    teamId: 2,
    teamName: "RCB",
    captain: "Virat Kohli",
    trophy: 1,
    bestBatsman: "Virat Kohli",
    bestBowler: "Mohammed Siraj",
    wicketKeeper: "Dinesh Karthik"
  },
  {
    teamId: 3,
    teamName: "MI",
    captain: "Rohit Sharma",
    trophy: 5,
    bestBatsman: "Rohit Sharma",
    bestBowler: "Jasprit Bumrah",
    wicketKeeper: "Ishan Kishan"
  },
  {
    teamId: 4,
    teamName: "LSG",
    captain: "Rishabh Pant",
    trophy: 0,
    bestBatsman: "KL Rahul",
    bestBowler: "Mohsin Khan",
    wicketKeeper: "Rishabh Pant"
  },
  {
    teamId: 5,
    teamName: "PBKS",
    captain: "Shreyas Iyer",
    trophy: 0,
    bestBatsman: "Shikhar Dhawan",
    bestBowler: "Arshdeep Singh",
    wicketKeeper: "Jitesh Sharma"
  },
  {
    teamId: 6,
    teamName: "SRH",
    captain: "Pat Cummins",
    trophy: 2,
    bestBatsman: "David Warner",
    bestBowler: "Pat Cummins",
    wicketKeeper: "Heinrich Klaasen"
  },
  {
    teamId: 7,
    teamName: "DC",
    captain: "Axar Patel",
    trophy: 0,
    bestBatsman: "David Warner",
    bestBowler: "Kuldeep Yadav",
    wicketKeeper: "Rishabh Pant"
  },
  {
    teamId: 8,
    teamName: "GT",
    captain: "Shubman Gill",
    trophy: 1,
    bestBatsman: "Shubman Gill",
    bestBowler: "Mohammed Shami",
    wicketKeeper: "Wriddhiman Saha"
  },
  {
    teamId: 9,
    teamName: "KKR",
    captain: "Venkatesh Iyer",
    trophy: 3,
    bestBatsman: "Andre Russell",
    bestBowler: "Sunil Narine",
    wicketKeeper: "Rahmanullah Gurbaz"
  },
  {
    teamId: 10,
    teamName: "RR",
    captain: "Ravindra Jadeja",
    trophy: 1,
    bestBatsman: "Jos Buttler",
    bestBowler: "Yuzvendra Chahal",
    wicketKeeper: "Sanju Samson"
  }
];

  return (
    <div className="container mt-5" style={{textAlign:'center'}}>
        <h1 className="text-center mb-4 text-danger">Here's the all teams</h1>
        {
            teams.map((team)=>{
                return(
                    <li key={team.teamId} className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="font-weight-bold">{team.teamName}</span>   
                        <Link to={`/watchteam/${team.teamName}`} className="btn btn-outline-primary btn-sm">{team.teamName}</Link>
                    </li>
                )
            })
        }
    </div>
  )
}
