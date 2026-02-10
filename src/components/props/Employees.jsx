import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {

    const title = "Employees App";

    const company = {
      name : "hyperbeen",
      year : 2025
    }

    const employees = [
      { id: 101 , name : "Prince" , age : 21},
      { id: 102 , name : "Dhrudip" , age : 22},
      { id: 103 , name : "Hemang" , age : 20},
      { id: 104 , name : "Yagnik" , age : 27},
    ]

  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1> Employees </h1>
      <EmployeeList title = {title} company = {company} employees= {employees}></EmployeeList>
      </div>
    </>
  );
};
