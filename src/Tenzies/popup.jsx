import "./TenSTyle.css";

const PopUp = (props) => {


    let minn 
    if (props.min > 0) {
        minn = ` ${props.min} minutes,`
    }
    else {
        minn=""
    }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>
          Congratulations! You win in {minn} {props.sec} seconds
          with {props.roll} rolls{" "}
        </p>
        <button onClick={props.hanClck} className="btnPop">
          Play Again
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
