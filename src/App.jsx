import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HeaderComponent } from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import { FooterComponent } from "./components/FooterComponent";
import "./App.css";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { MapDemo6 } from "./components/task/MapDemo6";
import { MapDemo7 } from "./components/task/MapDemo7";
import { MapDemo8 } from "./components/task/MapDemo8";
import { MapDemo9 } from "./components/task/MapDemo9";
import { MapDemo10 } from "./components/task/MapDemo10";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <HeaderComponent />
        {/* <ContentComponent/> */}
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
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
