import React from "react";
import { useState } from "react";

export const OnChange = () => {

    const [form , setForm] = useState({
        name : "",
        age : "",
        email: " ", 
        address : "",
        surname : "", 
        school : "",
        clg : "",
        branch : "",
        city : "",
        country : ""
    })

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAdress] = useState("");
//   const [surName, setSurName] = useState("");
//   const [school, setSchool] = useState("");
//   const [clg, setClg] = useState("");
//   const [branch, setBranch] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");

const handleChange = (event) => {
    setForm({
        ...form,
        [event.target.name] :  event.target.value
    })
}


//   const handleChange1 = (event) => {
//     setName(event.target.value);
//   };

//    const handleChange2 = (event) => {
//     setAge(event.target.value);
//   };
//    const handleChange3 = (event) => {
//     setEmail(event.target.value);
//   };
//    const handleChange4 = (event) => {
//     setAdress(event.target.value);
//   };
//    const handleChange5 = (event) => {
//     setSurName(event.target.value);
//   };
//    const handleChange6 = (event) => {
//     setSchool(event.target.value);
//   };
//    const handleChange7 = (event) => {
//     setClg(event.target.value);
//   }; const handleChange8 = (event) => {
//     setBranch(event.target.value);
//   };
//    const handleChange9 = (event) => {
//     setCity(event.target.value);
//   };
//    const handleChange10 = (event) => {
//     setCountry(event.target.value);
//   };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>onChange Event</h1>

      <label>
        name : <input name="name" type="text" onChange={handleChange}></input>
      </label>
      {form.name}
      <br />
      <label>
        age : <input name="age" type="text" onChange={handleChange}></input>
      </label>
      {form.age}
      <br />
      <label>
        email : <input name="email" type="text" onChange={handleChange}></input>
      </label>
      {form.email}
      <br />
      <label>
        address : <input name="address" type="text" onChange={handleChange}></input>
      </label>
      {form.address}
      <br />
      <label>
        surname : <input name="surname" type="text" onChange={handleChange}></input>
      </label>
      {form.surname}
      <br />
      <label>
        school : <input name="school" type="text" onChange={handleChange}></input>
      </label>
      {form.school}
      <br />
      <label>
        clg : <input name="clg" type="text" onChange={handleChange}></input>
      </label>
      {form.clg}
      <br />
      <label>
        branch : <input name="branch" type="text" onChange={handleChange}></input>
      </label>
      {form.branch}
      <br />
      <label>
        city : <input name="city" type="text" onChange={handleChange}></input>
      </label>
      {form.city}
      <br />
      <label>
        country : <input name="country" type="text" onChange={handleChange}></input>
      </label>
      {form.country}
    </div>
  );
};
