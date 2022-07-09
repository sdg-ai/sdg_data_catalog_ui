//Components
import Title from "../Title";

const DatasetTrends = () => {
  return (
    <section className="datasetTrends generalSectionWhite">
      <section className="generalSectionWhite__container">
        <section>
          <Title title="Dataset Trends" />
        </section>
        <section className="datasetTrends__trendContainer">
          <section>
            <h2>4</h2>
            <h5>Mentions short term</h5>
            <p>How often this dataset was mentioned in research papers in the last 3 months</p>
          </section>
          <section>
            <h2>16</h2>
            <h5>Mentions mid term</h5>
            <p>How often this dataset was mentioned in research papers in the last 12 months</p>
          </section>
          <section>
            <h2>24</h2>
            <h5>Mentions long term</h5>
            <p>How often this dataset was mentioned in research papers in total</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default DatasetTrends;
