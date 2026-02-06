import React from 'react'
import { useParams } from 'react-router-dom'

export const WatchTeam = () => {

    const teamName = useParams().name

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

const selectedTeam = teams.find((team) => team.teamName===teamName)

  return (
    <div className="container mt-4 text-center" style={{textAlign:'center'}}>
        <div className="border rounded p-3">
        <h1 className="mb-3 text-primary">Team : {selectedTeam?.teamName}</h1>
        <h1><strong> captain :</strong> {selectedTeam?.captain}</h1>
        <h1> <strong>trophy :</strong> {selectedTeam?.trophy}</h1>
        <h1><strong>bestBatsman :</strong> {selectedTeam?.bestBatsman}</h1>
        <h1>b<strong>estBowler :</strong> {selectedTeam?.bestBowler}</h1>
        <h1><strong>wicketKeeper :</strong> {selectedTeam?.wicketKeeper}</h1>
        </div>
    </div>
  )
}
