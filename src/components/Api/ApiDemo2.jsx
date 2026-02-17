import axios from "axios";
import React, { useState } from "react";

export const ApiDemo2 = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    console.log(response.data);
    console.log(response.data.products);
    setData(response.data.products);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo2</h1>
      <button onClick={getApiData}>GET</button>
      {/* {
            data.map((d)=> {
              return  <li>{d.title}</li>
                    //   <li>{d.id}</li>
            })
        } */}

      <table className="table table-dark " border="2">
        <thead>
          <tr>
            <th rowSpan="2">id</th>
            <th rowSpan="2">title</th>
            <th rowSpan="2">description</th>
            <th rowSpan="2">category</th>
            <th rowSpan="2">price</th>
            <th rowSpan="2">discountPercentage</th>
            <th rowSpan="2">rating</th>
            <th rowSpan="2">stock</th>
            <th rowSpan="2">tags</th>
            <th colSpan="2" className='border="2'>
              Reviews
            </th>
          </tr>
          <tr>
            <th>rating</th>
            <th>comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
                <td>{e.discountPercentage}</td>
                <td>{e.rating}</td>
                <td>{e.stock}</td>
                <td>{e.tags.join(",")}</td>
                <td>
                  {e.reviews.map((r) => {
                    return <li style={{ listStyle: "none" }}>{r.rating}</li>;
                  })}
                </td>
                <td>
                  {e.reviews.map((r) => {
                    return <li style={{ listStyle: "none" }}>{r.comment}</li>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
