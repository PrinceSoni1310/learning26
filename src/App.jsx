// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { HeaderComponent } from "./components/HeaderComponent";
// import ContentComponent from "./components/ContentComponent";
// import { FooterComponent } from "./components/FooterComponent";
// import "./App.css";
// import { MapDemo1 } from "./components/MapDemo1";
// import { MapDemo2 } from "./components/MapDemo2";
// import { MapDemo3 } from "./components/MapDemo3";
// import { MapDemo4 } from "./components/MapDemo4";
// import { MapDemo5 } from "./components/MapDemo5";
// import { MapDemo6 } from "./components/task/MapDemo6";
// import { MapDemo7 } from "./components/task/MapDemo7";
// import { MapDemo8 } from "./components/task/MapDemo8";
// import { MapDemo9 } from "./components/task/MapDemo9";
// import { MapDemo10 } from "./components/task/MapDemo10";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./components/Netflix/HomeComponent";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { NetflixSports } from "./components/Netflix/NetflixSports";
import { NetflixTv } from "./components/Netflix/NetflixTv";
import { Subscription } from "./components/Netflix/Subscription";
import { Navbar } from "./components/Navbar";
import { Watch } from "./components/Netflix/Watch";
import { ErrorNotFound } from "./components/Netflix/ErrorNotFound";
import { HomePage } from "./components/IplTeams/HomePage";
import { WatchTeam } from "./components/IplTeams/WatchTeam";
import { Teams } from "./components/IplTeams/Teams";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo1 } from "./components/useState/UseStateDemo1";
import { UseStateDemo2 } from "./components/useState/UseStateDemo2";
import { UseStateDemo3 } from "./components/useState/UseStateDemo3";
import { Employee } from "./components/props/Employees";
import { EmployeeList } from "./components/props/EmployeeList";
import { OnChange } from "./components/OnChange";
import { Teacher } from "./components/props/task/Teacher";
import { Students } from "./components/props/task/Students";
import { Subjects } from "./components/props/task/Subjects";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";
import { FormDemo4 } from "./components/form/FormDemo4";
import { FormValidation1 } from "./components/form/FormValidation1";
import { FormValidation2 } from "./components/form/FormValidation2";
import { FormValidation3 } from "./components/form/FormValidation3";
import { FormValidation4 } from "./components/form/FormValidation4";
import { FormValidation5 } from "./components/form/FormValidation5";
import { FormValidation6 } from "./components/form/FormValidation6";
import { FormValidation7 } from "./components/form/FormValidation7";
import { ApiDemo1 } from "./components/Api/ApiDemo1";
import { ApiDemo3 } from "./components/Api/ApiDemo3";
import { ApiDemo2 } from "./components/Api/ApiDemo2";

function App() {
  return (
    <>
      <div>


<Navbar></Navbar>

        <Routes>
            <Route path="/homepage" element={<HomePage></HomePage>}></Route>
            <Route path="/teams" element={<Teams></Teams>}></Route>
            <Route path="/watchteam/:name" element={<WatchTeam></WatchTeam>}></Route>
        {/* //----------------------------------------- */}

        <Route path="/functiondemo1" element={<FunctionDemo1></FunctionDemo1>}></Route>
        <Route path="/useStateDemo1" element={<UseStateDemo1></UseStateDemo1>}></Route>
        <Route path="/useStateDemo2" element={<UseStateDemo2></UseStateDemo2>}></Route>
        <Route path="/useStateDemo3" element={<UseStateDemo3></UseStateDemo3>}></Route>

        {/* //----------------------------------------- */}
        
          <Route 
          path="/" 
          element={<HomeComponent></HomeComponent>}
          ></Route>
          <Route
            path="/netflixmovies"
            element={<NetflixMovies></NetflixMovies>}
          ></Route>
          <Route
            path="/netflixshows"
            element={<NetflixShows></NetflixShows>}
          ></Route>
          <Route
            path="/netflixsports"
            element={<NetflixSports></NetflixSports>}
          ></Route>
          <Route
           path="/netflixtv" 
           element={<NetflixTv></NetflixTv>}
           ></Route>
          <Route
            path="/subscription"
            element={<Subscription></Subscription>}
          ></Route>
          <Route
          path="/*"
          element={<ErrorNotFound></ErrorNotFound>}
          ></Route>
          <Route
          path="/watch/:name"
          element={<Watch/>}
          ></Route>

          {/* ------------------------------------------------------------- */}

          <Route path="/employees" element={<Employee></Employee>}></Route>
          <Route path="/employeelist" element={<EmployeeList></EmployeeList>}></Route>
          <Route path="/teacher" element={<Teacher></Teacher>}></Route>
          <Route path="/students" element={<Students></Students>} ></Route>
          <Route path="/subjects" element={<Subjects></Subjects>}></Route>

          {/* -------------------------------------------------------------- */}
          <Route path="/onchange" element={<OnChange></OnChange>}></Route>

          {/* --------------------------------------------------------------- */}

          <Route path="/formdemo1" element= {<FormDemo1></FormDemo1>}></Route>
          <Route path="/formdemo2" element= {<FormDemo2></FormDemo2>}></Route>
          <Route path="/formdemo3" element= {<FormDemo3></FormDemo3>}></Route>
          <Route path="/formdemo4" element= {<FormDemo4></FormDemo4>}></Route>
          <Route path="/formvalidation1" element={<FormValidation1/>}></Route>
          <Route path="/formvalidation2" element={<FormValidation2/>}></Route>
          <Route path="/formvalidation3" element={<FormValidation3/>}></Route>
          <Route path="/formvalidation4" element={<FormValidation4/>}></Route>
          <Route path="/formvalidation5" element={<FormValidation5/>}></Route>
          <Route path="/formvalidation6" element={<FormValidation6/>}></Route>
          <Route path="/formvalidation7" element={<FormValidation7/>}></Route>

          {/* ------------------------------------------------------------------- */}
          <Route path="/apidemo1" element={<ApiDemo1/>}></Route>
          <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
          <Route path="/apidemo3" element={<ApiDemo3/>}></Route>
          
        </Routes>

        {/* <HeaderComponent />
        <ContentComponent/>
        <MapDemo1></MapDemo1>
        ----------------------------
        <MapDemo2></MapDemo2>
        ----------------------------
        <MapDemo3></MapDemo3>
        ----------------------------
        <MapDemo4></MapDemo4>
        ----------------------------
        <MapDemo5></MapDemo5>
        ----------------------------
        <MapDemo6></MapDemo6>
        ----------------------------
        <MapDemo7></MapDemo7>
        ----------------------------
        <MapDemo8></MapDemo8>
        ----------------------------
        <MapDemo9></MapDemo9>
        ----------------------------
        <MapDemo10></MapDemo10>
        <FooterComponent /> */}
      </div>
    </>
  );
}

export default App;