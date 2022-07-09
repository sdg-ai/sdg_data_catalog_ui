//React router
import { Link } from "react-router-dom";

//Components
import Title from "./Title";

const SubmitNewDataSetBanner = () => {
  return (
    <section className="submitNewDataSetBanner">
      <div className="submitNewDataSetBanner__container">
        <Title
          title="Submit a dataset"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor."
        />
        <div className="submitNewDataSetBanner__bttContainer">
          <Link to={`/submit-dataset`}>
            <button className="btt">Submit a dataset</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubmitNewDataSetBanner;
