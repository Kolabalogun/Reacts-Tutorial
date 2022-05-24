import React from "react";
import Array from "./array";
import Boxdiv from "./boxDiv";

const Showcase = () => {
  const [bxArray, bxArrayFunction] = React.useState(Array);

  function onClick(id) {
    bxArrayFunction(prevState => {
      return prevState.map(memee => {
        return memee.id === id ? {...memee, on: !memee.on} : {...memee}
      })
    })
  console.log(id)
  }

  const hereArray = bxArray.map((newA) => <Boxdiv key={newA.id} id={newA.id} on={newA.on} handleClick={onClick}/>);



  return (
    <div>
      <h3>Boxex</h3>
      {hereArray}
    </div>
  );
};

export default Showcase;
