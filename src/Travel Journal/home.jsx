import DesignInterface from "./designInterface";
import Navbar from "./navBar";
import "./travelstyle.css";
import travelArray from "./travelArray";
import React from "react";

const Home = () => {
const [shownbtn, shownbtnF] = React.useState(travelArray)


function handleclick(id) {
  shownbtnF(prevState => {
    return prevState.map(neww => {
      return neww.id === id ? {...neww, on: !neww.on} : {...neww}
    })
  })
}

  const newArray = shownbtn.map((neww) => {
    return <DesignInterface key={neww.id} id={neww.id} neww={neww} clickHandle={handleclick} on={neww.on} />;
  });

  return (
    <div className="container">
      <Navbar />
      <div className="section">
      {newArray}
      </div>
      
    </div>
  );
};

export default Home;
