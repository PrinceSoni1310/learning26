import React from "react";

export const MapDemo3 = () => {
  const students = [
    { id: 1, name: "Prince", age: 21, marks: 98, city: "Deesa" },
    { id: 2, name: "Hemang", age: 20, marks: 89, city: "Kadi" },
    { id: 3, name: "Dhrudip", age: 22, marks: 85, city: "Rajkot" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Map Demo3</h1>
      <table border={2} style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>{student.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
