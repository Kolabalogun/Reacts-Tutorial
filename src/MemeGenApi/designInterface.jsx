import "./style.css";

import React from "react";

const DesignInterface = (props) => {
  const [meme, memeFunction] = React.useState({
    topText: "",
    buttomText: "",
    memeImg: "",
  });

  const [memeArrayImg, memeArrayImgFunction] = React.useState([]);

  // API

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => memeArrayImgFunction(data.data.memes));
  }, []);

  console.log(memeArrayImg);

  // API

  function getImage(event) {
    const randNum = Math.floor(Math.random() * memeArrayImg.length);

    const url = memeArrayImg[randNum].url;

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
