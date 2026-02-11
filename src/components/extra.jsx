       {selectedCountry == "India" && (
          <>
            <label>State :</label>
            <select {...register("state")}>
              {/* <option value="">select State</option> */}
              <option value="Gujarat">Gujarat</option>
              <option value="Rajastan">Rajastan</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </>
        )}
        
        {selectedCountry === "England" && (
          <>
            <label>State : </label>
            <select {...register("state")}>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </>
        )}

        {selectedCountry === "USA" && (
          <>
            <label>State : </label>
            <select {...register("state")}>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>
          </>
        )}

        {selectedCountry === "China" && (
          <>
            <label>State : </label>
            <select {...register("state")}>
              <option value="Beijing">Beijing</option>
              <option value="Shanghai">Shanghai</option>
              <option value="Guangdong">Guangdong</option>
              <option value="Sichuan">Sichuan</option>
            </select>
          </>
        )}