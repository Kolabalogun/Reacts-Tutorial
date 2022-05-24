import React from "react";

import "./boxstyle.css";
import Interface from "./interface";

const Box = (props) => {
  // const [boxColor, boxColorFunction] = React.useState(props.on);

  

  const styless = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return <div style={styless} className="devv" onClick={() => props.handleClick(props.id)}></div>;
};

export default Box;
