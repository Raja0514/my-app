import React from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import Comp5 from "./Components/Comp5";
import Comp6 from "./Components/Comp6";
import Comp7 from "./Components/Comp7";
import Comp8 from "./Components/Comp8";
import Comp9 from "./Components/Comp9";
import "./Style.css";
function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Comp1></Comp1>
        <Comp2 name="Al Ajmi Marble" location="Oman" city="Muscat"></Comp2>
        <Comp3 name="Al Maha Marble" location="Oman" city="Sohar"></Comp3>
        <Comp4 name="Al Ajmi Marble" location="Oman" city="Ghala"></Comp4>
        <Comp5 name="Al Maha Marble" loaction="Oman" city="Rusayl"></Comp5>
        <Comp6></Comp6>
        <Comp7 date={new Date()}></Comp7>
        <Comp8 date={new Date()}></Comp8>
        <Comp9></Comp9>
      </div>
    </React.Fragment>
  );
}
export default App;
