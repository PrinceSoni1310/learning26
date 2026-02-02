import React from "react";

export const MapDemo10 = () => {

  const heroes = [
    { id: 1, name: "Iron Man", power: "Technology", team: "Avengers" },
    { id: 2, name: "Batman", power: "Intelligence", team: "Justice League" },
    { id: 3, name: "Spider-Man", power: "Spider Power", team: "Avengers" },
    { id: 4, name: "Thor", power: "Thunder", team: "Avengers" },
    { id: 5, name: "Captain America", power: "Strength", team: "Avengers" },
    { id: 6, name: "Hulk", power: "Anger Strength", team: "Avengers" },
  ];

  return (
    <div>
      <h1>Superheroes</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POWER</th>
            <th>TEAM</th>
          </tr>
        </thead>

        <tbody>
          {heroes.map((hero) => (
            <tr key={hero.id} style={{color:hero.team=="Avengers"&&"red"}}>
              <td style={{color:hero.id>2 &&"yellow"}}>{hero.id}</td>
              <td style={{backgroundColor:hero.name=="Batman"&& "gray"}}>{hero.name}</td>
              <td>{hero.power}</td>
              <td>{hero.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
