import React from "react";

export const MapDemo6 = () => {
  const friends = [
    { id: 1, name: "Dharm", city: "deesa", age: 21, gender: "male" },
    { id: 2, name: "Hemang", city: "kadi", age: 20, gender: "male" },
    { id: 3, name: "Dhrudip", city: "Rajkot", age: 22, gender: "male" },
    { id: 4, name: "Rahil", city: "himmatnagar", age: 21, gender: "male" },
    { id: 5, name: "Jignesh", city: "Rajkot", age: 23, gender: "male" },
    { id: 6, name: "Uday", city: "Tharad", age: 24, gender: "male" },
  ];

  return (
    <div>
      <h1>Map Demo6</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
            {
                friends.map((friend)=>{
                    return <tr key={friend.id} style={{color : friend.city=="Rajkot" && "aqua" , backgroundColor: friend.age ==21 && "green"}}>
                        <td>{friend.id}</td>
                        <td>{friend.name}</td>
                        <td>{friend.city}</td>
                        <td style={{color : friend.age>22 && "yellow"}}>{friend.age}</td>
                        <td>{friend.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
