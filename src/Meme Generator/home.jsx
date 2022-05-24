import DesignInterface from "./designInterface";
import Header from "./header";

import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="section">
        <DesignInterface />
      </div>
    </div>
  );
};

export default Home;
