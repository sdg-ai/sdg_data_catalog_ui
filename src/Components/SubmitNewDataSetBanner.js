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
          <button className="btt">Submit a dataset</button>
        </div>
      </div>
    </section>
  );
};

export default SubmitNewDataSetBanner;
