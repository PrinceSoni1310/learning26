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
import { HomeComponent } from "./components/Netflix/HomeComponent";
// import { Route, Routes } from "react-router-dom";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { NetflixSports } from "./components/Netflix/NetflixSports";
import { NetflixTv } from "./components/Netflix/NetflixTv";
import { Subscription } from "./components/Netflix/Subscription";
import { Navbar } from "./components/Navbar";
import { Watch } from "./components/Netflix/Watch";
import { ErrorNotFound } from "./components/Netflix/ErrorNotFound";














import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/IplTeams/HomePage";
import { WatchTeam } from "./components/IplTeams/WatchTeam";
import { Teams } from "./components/IplTeams/Teams";

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
