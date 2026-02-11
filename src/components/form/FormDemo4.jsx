import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const [Country, setCountry] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const countryStates = {
    India: ["Gujarat", "Rajasthan", "Maharashtra", "Delhi"],
    England: ["London", "Manchester", "Birmingham", "Liverpool"],
    USA: ["New York", "California", "Texas", "Florida"],
    China: ["Beijing", "Shanghai", "Guangdong", "Sichuan"],
  };

  const submitHandler = (date) => {
    console.log(date);
    setCountry(date);
    setisSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Country Info</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Country : </label>
        <select
          {...register("country")}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="England">England</option>
          <option value="USA">USA</option>
          <option value="Chaina">Chaina</option>
        </select>

        <br />

        <label> States : </label>
        <select {...register("state")}>

        {!selectedCountry &&(
            <option value="">Select Country First</option>
        )}

          {selectedCountry &&
            countryStates[selectedCountry].map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
        </select>

        <br />
        <label>Population </label>
        <input
          type="number"
          placeholder="Enter Population "
          {...register("population")}
        />
        <br />
        <label>Republic Day : </label>
        <input
          type="date"
          placeholder="Enter republic day date "
          {...register("date")}
        />
        <br />
        <input type="submit" />
      </form>

      {isSubmitted == true && (
        <div>
          <h1>Country : {Country.country}</h1>
          <h1>States : {Country.state}</h1>
          <h1>Popuation : {Country.population}</h1>
          <h1>Date : {Country.date}</h1>
        </div>
      )}
    </div>
  );
};
