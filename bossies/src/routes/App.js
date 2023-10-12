import "./App.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <h1 className="logo">BOSSIES</h1>
      <div className="homeTitle">
        <h1 className="titleUp">BOSSIES</h1>
        <h1 className="titleDown">WIJNBAR</h1>
        <div className="titleText">
          <p className="text">Van wijnliefhebbers, voor wijnliefhebbers.</p>
        </div>
        <Link to="/" className="buttonContact">
          CONTACT
        </Link>
      </div>
      <Contact />
    </div>
  );
}

export default App;
