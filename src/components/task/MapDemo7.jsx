import React from "react";
import Rolls from "../../assets/Rolls-Royce-Phantom.webp"
import bently from "../../assets/bently.jpeg"
import mercedes from "../../assets/mercedes.avif"
import ferrari from "../../assets/ferrari.jpeg"
import urus from "../../assets/urus.avif"
import Porsche from "../../assets/Porsche.avif"


export const MapDemo7 = () => {

  const cars = [
    { id: 1, img: Rolls,name: "Rolls-Royce Phantom", brand: "Rolls-Royce", price: 95000000, fuel: "Petrol", year: 2024 },
    { id: 2,img: bently, name: "Bentley Flying Spur", brand: "Bentley", price: 65000000, fuel: "Petrol", year: 2023 },
    { id: 3,img: mercedes, name: "Mercedes S-Class", brand: "Mercedes-Benz", price: 33000000, fuel: "Petrol", year: 2024 },
    { id: 4,img: urus, name: "Lamborghini Urus", brand: "Lamborghini", price: 42000000, fuel: "Petrol", year: 2023 },
    { id: 5,img: ferrari , name: "Ferrari Roma", brand: "Ferrari", price: 38000000, fuel: "Petrol", year: 2024 },
    { id: 6, img: Porsche,name: "Porsche 911 Turbo S", brand: "Porsche", price: 35000000, fuel: "Petrol", year: 2023 },
  ];

  return (
    <div>
      <h1>Map Demo7</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{textAlign:'center'}}>IMG</th>
            <th>CAR NAME</th>
            <th>BRAND</th>
            <th>PRICE (₹)</th>
            <th>FUEL</th>
            <th>YEAR</th>
          </tr>
        </thead>

        <tbody>
          {
            cars.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td style={{ textAlign: "center" }}>
                  <img
                    src={car.img}
                    alt={car.name}
                    style={{
                      width: "60px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                </td>
                  <td>{car.name}</td>
                  <td>{car.brand}</td>
                  <td>₹ {car.price.toLocaleString("en-IN")}</td>
                  <td>{car.fuel}</td>
                  <td>{car.year}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
