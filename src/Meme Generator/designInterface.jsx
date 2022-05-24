import "./style.css";
import memeArray from "./memeArray";

import React, { Component } from "react";

const DesignInterface = (props) => {
  // const [memeImg, setMemeImage] = React.useState("../img/meme.jpg");

  const [meme, memeFunction] = React.useState({
    topText: "",
    buttomText: "",
    memeImg: "../img/meme.jpg",
  });

  const [memeArrayImg, memeArrayImgFunction] = React.useState(memeArray);

  function getImage(event) {
    const getArray = memeArrayImg;
    const randNum = Math.floor(Math.random() * getArray.length);
    // console.log(randNum)
    // setMemeImage(memeArray[randNum].img);

    const url = memeArray[randNum].img;

    memeFunction((prevState) => {
      return {
        ...prevState,

        memeImg: url,
      };
    });
  }

  function handleChange(event) {
    memeFunction((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
        
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input
          name="topText"
          type="text"
          onChange={handleChange}
          value={meme.topText}
          placeholder="Input Top Text"
        />
        <input
          name="buttomText"
          type="text"
          value={meme.buttomText}
          onChange={handleChange}
          placeholder="Input Bottom Text"
        />
      </div>
      <button onClick={getImage}>Get new meme image</button>
      <div className="img-section">
        <p id="tt" className="top-text">
          {meme.topText}
        </p>
        <img src={meme.memeImg} alt="" />
        <p id="bb" className="bottom-text">
          {meme.buttomText}
        </p>
      </div>
    </form>
  );
};

export default DesignInterface;
