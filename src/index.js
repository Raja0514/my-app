import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function myTick(){
  ReactDOM.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    document.getElementById("manavan")
  );
}
setInterval(myTick,1000)