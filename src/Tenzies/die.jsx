import "./TenSTyle.css";

const Die = (props) => {
  const colorr = {
    backgroundColor: props.isHeld ? "rgb(78, 223, 133)" : "white",
  };

  return (
    <div
      style={colorr}
      onClick={() => props.dieClick(props.id)}
      className="die"
    >
      <h2>{props.value}</h2>
    </div>
  );
};

export default Die;
