import React from "react";

export const MapDemo9 = () => {

  const cartoons = [
    { id: 1, name: "Tom", show: "Tom & Jerry", type: "Cat", country: "USA" },
    { id: 2, name: "Jerry", show: "Tom & Jerry", type: "Mouse", country: "USA" },
    { id: 3, name: "Doraemon", show: "Doraemon", type: "Robot Cat", country: "Japan" },
    { id: 4, name: "Nobita", show: "Doraemon", type: "Human", country: "Japan" },
    { id: 5, name: "Shinchan", show: "Shinchan", type: "Human", country: "Japan" },
    { id: 6, name: "Pikachu", show: "Pokemon", type: "Pokemon", country: "Japan" },
  ];

  return (
    <div>
      <h1>Cartoon Characters </h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SHOW</th>
            <th>TYPE</th>
            <th>COUNTRY</th>
          </tr>
        </thead>

        <tbody>
          {cartoons.map((c) => (
            <tr key={c.id} style={{backgroundColor:c.type=="Human"&& "grey"}}>
              <td>{c.id}</td>
              <td style={{backgroundColor:c.name=="Doraemon"&& "green"}}>{c.name}</td>
              <td style={{color:c.show=="Tom & Jerry" && "red"}}>{c.show}</td>
              <td style={{color:c.type=="Cat"&& "pink"}}>{c.type}</td>
              <td style={{color:c.country=="Japan" && "blue"}}>{c.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
