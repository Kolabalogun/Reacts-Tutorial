import React from "react";
import "../BackgroundCoo/bgstyle.css";

const BgColor = () => {
  const [colorr, colorrF] = React.useState({
    input: "",
  });

  const BgColor = {
    backgroundColor: `${colorr.input}`,
    height: "100vh",
    width: "200vh",
  };

  function bgChange(e) {
    colorrF((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="body" style={BgColor}>
      <form>
        <input
          onChange={bgChange}
          type="text"
          name="input"
          value={colorr.input}
          placeholder="Input Color"
        />
        <br />
        <br />
        <p>Input Color Type to change the Background Color</p>
      </form>
    </div>
  );
};

export default BgColor;
