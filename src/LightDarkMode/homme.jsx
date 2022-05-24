import React from "react";
import Body from "./body";
import "./homm.css";
import Navbarr from "./navBarr";

const Homee = () => {
  const [colorr, colorrF] = React.useState(
    true
  );

  function hanclick(params) {
    colorrF((prevState) => !prevState);
  }

  return (
    <div className="home-container">
      <Navbarr colorr={colorr} handleClick={hanclick} />
      <Body colorr={colorr} />
    </div>
  );
};

export default Homee;
