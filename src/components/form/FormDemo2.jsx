import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const [login, setLogin] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setLogin(data);
    setisSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name : </label>
          <input type="text" placeholder="Enter name" {...register("name")} />
          <br />
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <br />
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <br />
          <label>age : </label>
          <input type="number" placeholder="Enter Age" {...register("age")} />
          <br />
          <label>Date : </label>
          <input type="date" {...register("date")} />
          <br />
          <input type="submit" />
        </div>
      </form>
      {isSubmitted == true && (
        <div>
          <h1>Output</h1>
          <h2>Name : {login.name}</h2>
          <h2>Email :{login.email}</h2>
          <h2>Password :{login.password}</h2>
          <h2>Age :{login.age}</h2>
          <h2>Date :{login.date}</h2>
        </div>
      )}
    </div>
  );
};
