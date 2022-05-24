import React from "react";
import Die from "./die";
import "./trn.css";

// REACT PACKAGE ID
import { nanoid } from "nanoid";

// CONFETTI
import Confetti from "react-confetti";

const Main = () => {
  // DIE NUMBER ARRAY
  const [dieArray, dieArrayF] = React.useState(getRandArray());

  // GAME WIN STATE
  const [tenzies, tenziesF] = React.useState(false);

  React.useEffect(() => {
    const allClicked = dieArray.every((die) => die.isClicked === true);
    const firstValue = dieArray[0].value;
    const allValue = dieArray.every((die) => die.value === firstValue);

    if (allClicked && allValue) {
      tenziesF(true);
      console.log("you winn");
    }
  }, [dieArray]);

  // GET RANDOM ARRAY FOR THE STATE
  function getRandArray() {
    const arrays = [];
    for (let i = 0; i < 10; i++) {
      arrays.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isClicked: false,
      });
    }
    return arrays;
  }

  // MAPPING ARRAY INTO DIE DIV
  const DieElements = dieArray.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      dieClick={dieClick}
      isHeld={die.isClicked}
    />
  ));

  //   FUNCTION FOR EACH DIE CLICKED
  function dieClick(id) {
    dieArrayF((prevState) => {
      return prevState.map((die) => {
        return die.id === id
          ? { ...die, isClicked: !die.isClicked }
          : { ...die };
      });
    });
  }

  // BUTTON FUNCTION
  function rollDice(params) {
    dieArrayF((prevState) => {
      return prevState.map((die) => {
        return die.isClicked
          ? { ...die }
          : {
              id: nanoid(),
              value: Math.ceil(Math.random() * 6),
              isClicked: false,
            };
      });
    });
  }

  //   FUNCTION TO RESET THR DICE
  function resetDice(params) {
    dieArrayF((prevState) => {
      return prevState.map((die) => {
        return {
          ...die,
          id: nanoid(),
          value: Math.ceil(Math.random() * 6),
          isClicked: false,
        };
      });
    });

    tenziesF(false);
  }

  return (
    <div className="main-div">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid">{DieElements}</div>

      {tenzies ? (
        <button onClick={resetDice} className="btnr">
          New Game
        </button>
      ) : (
        <button onClick={rollDice} className="btnr">
          Roll
        </button>
      )}
    </div>
  );
};

export default Main;
