import "./App.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const App = props => {


  return (
    <div className="Container">
        <div className="clock"><FontAwesomeIcon icon={faClock}/> </div>
        <div className="fourthN">{props.digitFour % 10 }</div>
        <div className="thirdN">{props.digitThree % 10 }</div>
        <div className="secondN">{props.digitTwo % 10 }</div>
        <div className="firstN">{props.digitOne % 10}</div>
      </div>
  );

};

export default App;
