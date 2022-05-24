import React from "react";
import boxArray from "./boxesArray";
import "./boxstyle.css";
import Box from "./box";

const Interface = (props) => {
  const [boxes, boxesFunction] = React.useState(boxArray);

  //   const styless = {
  //     backgroundColor: props.darkmode ? "#222222" : "cccccc",
  //   };

  function clickHandler(id) {
    // boxesFunction((prevState) => {
    //   const newBoxArray = [];
    //   for (let i = 0; i < prevState.length; i++) {
    //     const currentState = prevState[i];
    //     if (currentState.id === id) {
    //       const updatedState = {
    //         ...currentState,
    //         on: !currentState.on,
    //       };
    //       newBoxArray.push(updatedState);
    //     } else {
    //       newBoxArray.push(currentState);
    //     }
    //   }

    //   return newBoxArray;
    // });
    // console.log(boxes)

    boxesFunction(prevState => {
      return prevState.map((boxA) => {
        return boxA.id === id ? {...boxA, on: !boxA.on} : boxA
      })
    })

    console.log(id);
  }

  const mappArray = boxes.map((newA) => (
    <Box key={newA.id} id={newA.id} handleClick={clickHandler} on={newA.on} />
  ));

  return (
    <div>
      <h3>Boxes will go here</h3>

      {mappArray}
    </div>
  );
};

export default Interface;
