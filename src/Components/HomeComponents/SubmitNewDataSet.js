import Title from "../Title";

const SubmitNewDataSet = () => {
  return (
    <section className="submitNewDataSet">
      <div className="submitNewDataSet__container">
        <Title
          title="Submit a dataset"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor."
        />
        <div className="submitNewDataSet__bttContainer">
          <button className="submitBtt">Submit a dataset</button>
        </div>
      </div>
    </section>
  );
};

export default SubmitNewDataSet;
