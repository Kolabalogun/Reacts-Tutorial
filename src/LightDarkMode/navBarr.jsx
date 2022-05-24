import React from "react";
import "./homm.css";
const Navbarr = (props) => {
  const lightMode = {
    backgroundColor: props.colorr ? "#ffffff" : "rgb(34, 38, 44)",
    boxShadow: props.colorr
      ? "0px 1px 1px #aaa"
      : "0px 3px 4px rgb(34, 38, 44)",
  };
  const darkMode = {
    backgroundColor: props.colorr ? "rgb(34, 38, 44)" : "#ffffff",
  };

  const darkTextMode = {
    color: props.colorr ? "rgb(34, 38, 44)" : "#ffffff",
  };

  return (
    <div style={lightMode} className="homme-header">
      <h2>React App</h2>
      <div className="mode">
        <div className="lightt">
          <p style={darkTextMode} className="light">
            Light
          </p>
          <div style={darkMode}  className="mode-circle">
            {props.colorr ? (
              <div onClick={props.handleClick} className="lightmode"></div>
            ) : (
              <div onClick={props.handleClick} className="darkmode"></div>
            )}
          </div>
          <p style={darkTextMode} className="dark">
            Dark
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
