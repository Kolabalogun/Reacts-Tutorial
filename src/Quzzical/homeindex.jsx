import StartPage from "./startPAge";
import React from "react";
import "./quizz.css";

import QuestionPage from "./questionPage";

// REACT PACKAGE ID
import { nanoid } from "nanoid";

const HomeIndex = () => {
  // NEXT PAGE CLICK
  const [trigger, triggerF] = React.useState(true);

  const [click, clickF] = React.useState(false);

  // QUESTION ARRAY
  const [TriviaArray, TriviaArrayF] = React.useState([]);

  // NEW ARRAY
  const [newArray, newArrayF] = React.useState([]);

   //  NEXT PAGE FUNCTION
   function nextPage() {
    triggerF(false);

    const arrWithClick = TriviaArray.map((object) => {
      return { ...object, isClicked: "false" };
    });


   newArrayF(arrWithClick)
  }

  // GETTING API

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=4&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => TriviaArrayF(data.results))

  }, [trigger]);

  
// ADDING ISCLICKED TO EACH OBJECT
 


  // MAPPING ISCLICKED ARRAY
  const QuestionElement = newArray.map((Q) => (
    <QuestionPage
      key={nanoid()}
      id={nanoid()}
      question={Q.question}
      option1={Q.correct_answer}
      option2={Q.incorrect_answers[0]}
      option3={Q.incorrect_answers[1]}
      option4={Q.incorrect_answers[2]}
      optionClick={Q.isClicked}
      OPC = {optionSel}
    />
  ));

 
function optionSel(id) {
  newArrayF(prevState => {
    return prevState.map(OP => {
      return OP.id === id? {
        ...OP, isClicked : !OP.isClicked 
      }: {...OP}
    })
  })
}





  console.log(newArray);
  return (
    <div className="quizcontainer">
      {trigger ? (
        <StartPage handleClick={nextPage} trigg={trigger} />
      ) : (
        QuestionElement
      )}

      {trigger === false ? (
        <button className="startbtn">Check Answers</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeIndex;
