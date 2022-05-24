import "./homm.css";

const Body = (props) => {
  const lightMode = {
    backgroundColor: props.colorr ? "#ffffff" : "rgb(34, 38, 44)",
  };

  const darkTextMode = {
    color: props.colorr ? "rgb(34, 38, 44)" : "#ffffff",
  };

  return (
    <div style={lightMode} className="bodyy">
      <h1 style={darkTextMode}>Fun Facts about React</h1>

      <div className="lists">
        <ul>
          <li>
            <p style={darkTextMode}>Was first released in 2013</p>
          </li>
          <li>
            <p style={darkTextMode}>Was originally created by Jordan Walke</p>
          </li>
          <li>
            <p style={darkTextMode}>Has well over 100k stars on GitHub</p>
          </li>
          <li>
            <p style={darkTextMode}>Is maintained by Facebook</p>
          </li>
          <li>
            <p style={darkTextMode}>
              Powers thousands of enterprise apps, including mobile apps{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
