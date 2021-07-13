import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let counter = 0;
setInterval(() => {
  let first = Math.floor(counter / 1000);
  let second = Math.floor(counter / 100);
  let third = Math.floor(counter / 10);
  let fourth = Math.floor(counter / 1);


  counter ++ ;

  ReactDOM.render(
    <React.StrictMode>
      <App
        digitFour={first}
        digitThree={second}
        digitTwo={third}
        digitOne={fourth}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);
reportWebVitals();
