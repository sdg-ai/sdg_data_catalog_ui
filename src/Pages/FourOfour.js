//React router
import { Link } from "react-router-dom";

//Components
import Navbar from "../Components/NavFooter/Navbar";

const FourOFour = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Navbar />
      <div style={{ paddingTop: "200px", width: "100%", textAlign: "center" }}>
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">
          <button className="btt">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default FourOFour;
