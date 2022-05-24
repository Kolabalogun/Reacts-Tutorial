import React from "react";
import Die from "./die";
import "./TenSTyle.css";

// REACT PACKAGE ID
import { nanoid } from "nanoid";

// CONFETTI
import Confetti from "react-confetti";
import PopUp from "./popup";

const Main = () => {
  // DIE NUMBER ARRAY
  const [dieArray, dieArrayF] = React.useState(getRandArray());

  // GAME WIN STATE
  const [tenzies, tenziesF] = React.useState(false);

  // NUMBER OF ROLLS
  const [rolls, rollsF] = React.useState(0);

  // START GAMEEE
  const [startGame, startGameF] = React.useState(true);

  // POP UP TRIGGERR
  const [trigg, triggF] = React.useState(false);

  // TIME INTERVALS
  const [minutes, minutesF] = React.useState(0);
  const [seconds, secondsF] = React.useState(0);

  const [timeID, timeIDF] = React.useState(0);

  const [timeR, timeRF] = React.useState(false);

  React.useEffect(() => {
    let interValid = null;

    if (timeR) {
      interValid = setInterval(() => {
        secondsF((prevState) => prevState + 1);
      }, 1000);

      timeIDF(interValid);
    } else {
      clearInterval(timeID);
    }
  }, [timeR]);

  // MINUTES
  if (seconds === 59) {
    minutesF((prevState) => prevState + 1);
    secondsF(0);
  }

  function startTime() {
    timeRF(true);
  }
  function stopTime() {
    timeRF(false);
  }

  React.useEffect(() => {
    const allClicked = dieArray.every((die) => die.isClicked === true);
    const firstValue = dieArray[0].value;
    const allValue = dieArray.every((die) => die.value === firstValue);

    if (allClicked && allValue) {
      tenziesF(true);

      console.log("you winn");

      stopTime();

      triggF((prevState) => !prevState);
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
    if (startGame) {
      dieArrayF((prevState) => prevState);
    } else {
      dieArrayF((prevState) => {
        return prevState.map((die) => {
          return die.id === id
            ? { ...die, isClicked: !die.isClicked }
            : { ...die };
        });
      });
    }
  }

  // BUTTON FUNCTION
  function rollDice() {
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

    // NUMBER OF ROLLS
    rollsF((prevState) => prevState + 1);
  }

  //   FUNCTION TO RESET THR DICE
  function resetDice() {
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
    rollsF(0);
    secondsF(0);
    minutesF(0);

    startTime();
  }

  function startgame() {
    startGameF(false);
    startTime();
  }

  function popUp(params) {
    triggF((prevState) => !prevState);
  }

  return (
    <div className="main-div">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <div className="">
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <span className="noRoll">Number of Rolls: {rolls}</span>
        <span className="noRoll">
          Time: {minutes}:{seconds}
        </span>
      </div>
      <PopUp
        trigger={trigg}
        min={minutes}
        sec={seconds}
        roll={rolls}
        hanClck={popUp}
      />
      <div className="grid">{DieElements}</div>

      {startGame ? (
        <button onClick={startgame} className="btnr">
          Start Game
        </button>
      ) : tenzies ? (
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
