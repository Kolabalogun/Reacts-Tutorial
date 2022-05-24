import "./quizz.css";

const QuestionPage = (props) => {

 const styyy = {
   backgroundColor : props.optionClick === true ? "#3de4ff" : ""
 }

  return (
    <div className="questionPage">
      <div className="question">
        <h3>{props.question}</h3>
        <div className="answers">
          <button
           
            onClick={() => props.OPC(props.id)}
            className="option"
            style={styyy}
          >
            {props.option1}
          </button>
          <button
           
            onClick={() => props.OPC(props.id)}
            className="option"
            style={styyy}
          >
            {props.option2}
          </button>
          <button
           
            onClick={() => props.OPC(props.id)}
            className="option"
            style={styyy}
          >
            {props.option3}
          </button>
          <button
           
            onClick={() => props.OPC(props.id)}
            className="option"
            style={styyy}
          >
            {props.option4}
          </button>
        </div>

        <div className="line"></div>
      </div>
    </div>
  );
};

export default QuestionPage;
