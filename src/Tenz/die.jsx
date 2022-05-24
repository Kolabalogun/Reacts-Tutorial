import "./trn.css";

const Die = (props) => {
  //   DIE CLICKED STYLING

  const color = {
    backgroundColor: props.colorr ? "rgb(78, 223, 133)" : "white",
  };

  return (
    <div
      onClick={props.handleClick}
      style={color}
      className="die"
    >
      <h2>{props.value}</h2>
    </div>
  );
};

export default Die;
